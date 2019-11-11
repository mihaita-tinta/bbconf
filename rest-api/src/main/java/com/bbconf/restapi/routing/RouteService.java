package com.bbconf.restapi.routing;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

import java.io.IOException;
import java.io.InputStream;
import java.time.Duration;
import java.util.List;
import java.util.Random;
import java.util.stream.IntStream;

import static com.bbconf.restapi.routing.Locations.ATTRACTIONS;

@Service
public class RouteService {
    private static final Logger log = LoggerFactory.getLogger(RouteService.class);

    static final Random random = new Random();
    static final ObjectMapper mapper = new ObjectMapper();
    static final String URL = "/api/routes";

    final WebClient client;


    public RouteService(@Value("${routing.api.url}")
                                String routingApiUrl) {
        this.client = WebClient.builder()
                .baseUrl(routingApiUrl)
                .build();
    }

    Flux<double[]> getRemoteRoute(String from, String to) {


        return client
                .get()
                .uri(uriBuilder -> uriBuilder
                        .path(URL)
                        .queryParam("from", from)
                        .queryParam("to", to)
                        .build())
                .retrieve()
                .bodyToMono(Route.class)
                .flatMapMany(r -> Flux.fromIterable(r.getRoute()));
    }

    public Flux<double[]>  getRoute() {

        return getRemoteRoute(getRandomAttraction(), "44.5065009,26.0880662")
                .cache()
                .onErrorResume(RouteService::fallback);
    }

    String getRandomAttraction() {
        int attraction = random.nextInt(ATTRACTIONS.length);
        String[] a = ATTRACTIONS[attraction];
        return nearLocation(a);
    }

    String nearLocation(String[] a) {
        a[0] = a[0].substring(0, a[0].length() - 2) + random.nextInt(10) + random.nextInt(10);
        a[1] = a[1].substring(0, a[1].length() - 2) + random.nextInt(10) + random.nextInt(10);
        return a[0] + "," + a[1];
    }

    static Flux<double[]> fallback(Throwable t) {
        log.warn("fallback - creating alternative route for error: " + t);
        int index = random.nextInt(98) + 1;
        try (InputStream inputStream = new ClassPathResource("/routes/r" + index + ".json").getInputStream()) {
            List<double[]> route = mapper.readValue(inputStream, Route.class).getRoute();
            return Flux.fromIterable(route);
        } catch (IOException e) {
            e.printStackTrace();
            throw new IllegalStateException("Could not load route", e);
        }
    }

    public Mono<String> geocode(double[] location, Integer delay) {
        return client
                .get()
                .uri(uriBuilder -> uriBuilder
                        .path("/api/geocode")
                        .queryParam("location", "123")
                        .queryParam("delay", delay)
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .timeout(Duration.ofMinutes(2));
    }
}
