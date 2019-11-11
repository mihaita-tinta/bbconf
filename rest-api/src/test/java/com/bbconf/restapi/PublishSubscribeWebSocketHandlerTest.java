package com.bbconf.restapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.time.Duration;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import static java.time.temporal.ChronoUnit.SECONDS;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PublishSubscribeWebSocketHandlerTest {
    private static final Logger log = LoggerFactory.getLogger(PublishSubscribeWebSocketHandlerTest.class);
    @LocalServerPort
    int port;

    @Autowired
    ObjectMapper mapper;

    @Test
    public void test() throws InterruptedException {
        int expectedReceivedEvents = 2;
        CountDownLatch latch = new CountDownLatch(expectedReceivedEvents);

        WebSocketClient client = new ReactorNettyWebSocketClient();


        client.execute(
                URI.create("ws://localhost:" + port + "/api/websocket"),
                new HttpHeaders(),
                session -> {
                    String sessionId = session.getId();
                    Flux<WebSocketMessage> sentFlux = Flux
                            .range(0, 10)
                            .interval(Duration.of(1, SECONDS))
                            .map(i ->  WebSocketEvent.positionUpdate(sessionId, i, -i))
                            .map(this::eventToString)
                            .map(json -> {
                                log.info("test - generating payload: " + json);
                                return session.textMessage(json);
                            })
                            .doFinally(signalType -> {
                                log.info("test - finally for " + sessionId);
                            });
                    Mono<Void> output = session.send(sentFlux);

                    Mono<Void> input = session.receive()
                            .doOnNext(message -> {
                                latch.countDown();
                                log.info("test - receive " + sessionId + ", message: " + message.getPayloadAsText());
                            })
                            .then();

                    return Mono.zip(input, output).then();
                })
                .subscribe();

        latch.await(10000, TimeUnit.MILLISECONDS);
        Assert.assertEquals(0, latch.getCount());
    }

    String eventToString(WebSocketEvent positionUpdate) {
        try {
            return mapper.writeValueAsString(positionUpdate);
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException(e);
        }
    }
}