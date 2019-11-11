package com.bbconf.restapi;


import com.bbconf.restapi.routing.RouteService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;

@Component
public class RoutingWebSocketHandler implements WebSocketHandler {
    private static final Logger log = LoggerFactory.getLogger(RoutingWebSocketHandler.class);

    private final ObjectMapper mapper = new ObjectMapper();
    private final RouteService routeService;

    @Autowired
    public RoutingWebSocketHandler(RouteService routeService) {
        this.routeService = routeService;
    }

    @Override
    public final Mono<Void> handle(WebSocketSession session) {
        String sessionId = session.getId();

        Flux<WebSocketMessage> delayedMessages = routeService.getRoute()
                .delayElements(Duration.ofMillis(200))
                .map(pos -> WebSocketEvent.positionUpdate(sessionId, pos[1], pos[0]))
                .map(this :: eventToString)
                .map(event -> session.textMessage(event));

        Mono<Void> output = session.send(delayedMessages);

        Mono<Void> input = session.receive()
                .doOnNext(message -> {
                    String payload = message.getPayloadAsText();
                    log.info("doOnNext - sessionId: " + sessionId + " payload: " + payload);
                })
                .doOnError(e -> {
                    e.printStackTrace();
                })
                .then();


        return Mono.zip(input, output).then();
    }

    String eventToString(WebSocketEvent positionUpdate) {
        try {
            return mapper.writeValueAsString(positionUpdate);
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException(e);
        }
    }

}