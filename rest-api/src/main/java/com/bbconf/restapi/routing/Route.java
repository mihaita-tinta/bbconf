package com.bbconf.restapi.routing;

import java.util.List;

public class Route {

    private String text;
    private Double distance;
    private List<double[]> route;

    public List<double[]> getRoute() {
        return route;
    }

    public void setRoute(List<double[]> route) {
        this.route = route;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }
}
