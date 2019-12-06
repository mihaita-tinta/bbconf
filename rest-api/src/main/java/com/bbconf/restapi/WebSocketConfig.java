package com.bbconf.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.server.support.HandshakeWebSocketService;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class WebSocketConfig {

    @Autowired
    WebSocketHandler handler;

    @Bean
    public HandshakeWebSocketService handshakeWebSocketService() {
        return new HandshakeWebSocketService();
    }

    @Bean
    public WebSocketHandlerAdapter websocketHandlerAdapter() {
         return new WebSocketHandlerAdapter();
    }

    @Bean
    public SimpleUrlHandlerMapping wsHandlerMapping() {
        Map<String, Object> map= new HashMap<>();
        map.put("/api/websocket", handler);
        SimpleUrlHandlerMapping handlerMapping = new SimpleUrlHandlerMapping();
        handlerMapping.setOrder(1);
        handlerMapping.setUrlMap(map);
        return handlerMapping;
    }
}
