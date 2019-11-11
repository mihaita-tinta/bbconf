package com.bbconf.restapi;

import com.bbconf.restapi.routing.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RequestMapping("/api/routes")
@RestController
public class RouteController {

    @Autowired
    RouteService routeService;

    @GetMapping("/remote-call")
    public Mono<String> remoteCall(@RequestParam(defaultValue = "100") Integer delay) {

        return routeService.geocode(null, delay);

    }
}
