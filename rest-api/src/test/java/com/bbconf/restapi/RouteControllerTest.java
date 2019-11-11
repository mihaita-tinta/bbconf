package com.bbconf.restapi;

import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.JUnitRestDocumentation;
import org.springframework.restdocs.webtestclient.WebTestClientRestDocumentation;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;

import static java.lang.System.out;
import static org.junit.Assert.*;
import static org.springframework.restdocs.webtestclient.WebTestClientRestDocumentation.document;

@SpringBootTest(properties = "routing.api.url=http://localhost:8888")
@RunWith(SpringRunner.class)
public class RouteControllerTest {

    private final MockWebServer mockWebServer = new MockWebServer();

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation();

    @Autowired
    ApplicationContext context;

    WebTestClient client;

    @Before
    public void before() throws IOException {
        mockWebServer.start(8888);

        client = WebTestClient.bindToApplicationContext(context)
                .configureClient()
                .filter(WebTestClientRestDocumentation.documentationConfiguration(restDocumentation))
                .build();

        mockWebServer.enqueue(
                new MockResponse()
                        .setResponseCode(200)
                        .setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN)
                        .setBody("aaaa")
        );
    }

    @Test
    public void test() {

        client.get()
                .uri("/api/routes/remote-call")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .exchange()
                .expectStatus()
                .is2xxSuccessful()
                .expectBody()
                .consumeWith(s -> out.println(new String(s.getResponseBody())))
                .consumeWith(s -> assertEquals("aaaa", new String(s.getResponseBody())))
                .consumeWith(document("remote-call"));
    }

}