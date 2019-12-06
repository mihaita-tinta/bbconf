package com.bbconf.restapi;

import com.bbconf.restapi.routing.Route;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.io.InputStream;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Consumer;

import static org.slf4j.LoggerFactory.getLogger;
import static reactor.core.publisher.Flux.fromIterable;

@Service
public class RoutingWebSocketHandler implements WebSocketHandler {
    private static final Logger log = getLogger(RoutingWebSocketHandler.class);
    static final ObjectMapper mapper = new ObjectMapper();
    static Random random = new Random();

    Map<String, WebSocketHolder> connection = new ConcurrentHashMap<>();

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        String sessionId = session.getId();
        Flux<WebSocketMessage> fluxSink = Flux
                .create((Consumer<FluxSink<WebSocketMessage>>) sink -> {
                    log.info("create - new sink created for: " + sessionId);
                    connection.put(sessionId, WebSocketHolder.of(sink, session));
                })
                .onErrorResume(Exception.class, Flux::error)
                .doOnComplete(() -> log.info("handle - doOnComplete for " + sessionId))
                .doFinally(signalType -> {
                    log.info("handle - finally for " + sessionId);
                    connection.remove(sessionId);
                });
        return session.send(fluxSink);

    }

    public Mono<Void> trigger(String sessionId) {

        WebSocketHolder webSocketHolder = connection.get(sessionId);
        if (webSocketHolder == null) {
            return Mono.error(new IllegalArgumentException("no session id found"));
        }

        return
            routesFromFile()
                .delayElements(Duration.ofSeconds(1))
                .map(doubles -> WebSocketEvent.positionUpdate(sessionId, doubles[1], doubles[0]))
                .map(this::eventToString)
                .map(json -> webSocketHolder.session.textMessage(json))
                    .map(m -> webSocketHolder.sink.next(m))
                .then();
    }

    private String eventToString(WebSocketEvent positionUpdate) {
        try {
            return mapper.writeValueAsString(positionUpdate);
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException(e);
        }
    }

    static Flux<double[]> routesFromFile() {
        log.info("routesFromFile");
        int index = random.nextInt(98) + 1;
        try (InputStream inputStream = new ClassPathResource("/routes/r" + index + ".json").getInputStream()) {
            List<double[]> route = mapper.readValue(inputStream, Route.class).getRoute();
            return fromIterable(route);
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalStateException("Could not load route", e);
        }
    }

    private static class WebSocketHolder {
        FluxSink<WebSocketMessage> sink;
        WebSocketSession session;

        static WebSocketHolder of(FluxSink<WebSocketMessage> sink, WebSocketSession session) {
            WebSocketHolder holder = new WebSocketHolder();
            holder.sink = sink;
            holder.session = session;
            return holder;
        }
    }
}
