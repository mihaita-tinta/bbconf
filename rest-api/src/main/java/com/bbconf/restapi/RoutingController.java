package com.bbconf.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class RoutingController {
    @Autowired
    RoutingWebSocketHandler handler;

    @GetMapping("/trigger/{sessionId}")
    public Mono<Void> trigger(@PathVariable String sessionId) {

        return handler.trigger(sessionId);
    }

}
