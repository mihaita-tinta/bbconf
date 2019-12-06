package com.bbconf.restapi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.test.StepVerifier;

import java.net.URI;

import static org.junit.Assert.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
public class RoutingWebSocketHandlerTest {
    private static final Logger log = LoggerFactory.getLogger(RoutingWebSocketHandlerTest.class);
    @LocalServerPort
    int port;

    @Test
    public void test() throws InterruptedException {
        WebSocketClient client = new ReactorNettyWebSocketClient();

        client.execute(URI.create("http://localhost:" + port + "/api/websocket"),
                session -> {
                    return session.receive()
                            .doOnNext(m -> log.info("received-" + m.getPayloadAsText()))
                            .then();
                });

        Thread.sleep(1000);
    }

}