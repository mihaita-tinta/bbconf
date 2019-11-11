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

@Service
public class RouteService {
    private static final Logger log = LoggerFactory.getLogger(RouteService.class);

    static final Random random = new Random();
    static final ObjectMapper mapper = new ObjectMapper();
    static final String URL = "/api/routes";

    static String[][] attractions = new String[][] {

            new String[] {"44.4333263", "26.0711632"},
            new String[] {"44.438842", "26.0483322"},
            new String[] {"44.4408816", "26.048846"},
            new String[] {"44.4368106", "26.0278367"},
            new String[] {"44.4295186", "26.026026"},
            new String[] {"44.4378576", "26.0439617"},
            new String[] {"44.4336288", "26.060012"},
            new String[] {"44.4287255", "26.0734016"},
            new String[] {"44.4255995", "26.088937"},
            new String[] {"44.4173851", "26.1006958"},
            new String[] {"44.4141972", "26.1188919"},
            new String[] {"44.4201438", "26.137603"},
            new String[] {"44.4297062", "26.1377746"},
            new String[] {"44.4352836", "26.1403495"},
            new String[] {"44.453962", "26.1339358"},
            new String[] {"44.458128", "26.1123065"},
            new String[] {"44.460701", "26.0852698"},
            new String[] {"44.4385372", "26.1229773"},
            new String[] {"44.4385371", "26.1229777"},
            new String[] {"44.4385319", "26.1229775"},
            new String[] {"44.4385379", "26.1229773"},
            new String[] {"44.4492517", "26.1018447"},
            new String[] {"44.4238939", "26.2589119"},
            new String[] {"44.5201503", "26.0834972"},
            new String[] {"44.5209155", "26.0836506"},
            new String[] {"44.5566301", "26.0889714"},//airport
            new String[] {"44.5566307", "26.0889713"},//airport
            new String[] {"44.5566319", "26.0889713"},//airport
            new String[] {"44.5566307", "26.0889713"},//airport
            new String[] {"44.5566304", "26.0889710"},//airport
            new String[] {"44.5566317", "26.0889613"},//airport
            new String[] {"44.5566303", "26.0889714"},//airport
            new String[] {"44.5566337", "26.0889743"},//airport
            new String[] {"44.5566300", "26.0889710"},//airport
            new String[] {"44.5566307", "26.0889713"},//airport
    };

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
                .name("route-service")
                .metrics()
                .flatMapMany(r -> Flux.fromIterable(r.getRoute()));
    }

    public Flux<double[]>  getRoute() {

        return getRemoteRoute(getRandomAttraction(), "44.5065009,26.0880662")
                .cache()
                .onErrorResume(RouteService::fallback);
    }

    String getRandomAttraction() {
        int attraction = random.nextInt(attractions.length);
        String[] a = attractions[attraction];
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
