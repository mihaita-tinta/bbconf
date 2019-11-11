package com.bbconf.restapi;

import java.util.HashMap;
import java.util.Map;

public class WebSocketEvent {

    private Map<String, Object> attributes;

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public static WebSocketEvent positionUpdate(String sessionId, double lat, double lng) {
        WebSocketEvent event = new WebSocketEvent();
        event.attributes = new HashMap<>();
        event.attributes.put("lat", lat);
        event.attributes.put("lng", lng);
        event.attributes.put("id", sessionId);
        event.attributes.put("type", "update");
        return event;
    }
}
