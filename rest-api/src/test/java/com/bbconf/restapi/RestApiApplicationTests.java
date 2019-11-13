package com.bbconf.restapi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class RestApiApplicationTests {

	@Test
	public void contextLoads() {

//        BlockHound.install(new BlockHoundIntegration() {
//
//            @Override
//            public void applyTo(BlockHound.Builder builder) {
//                builder.allowBlockingCallsInside(
//                        "java.util.UUID",
//                        "randomUUID");
//
//                builder.allowBlockingCallsInside(
//                        "ch.qos.logback.classic.Logger",
//                        "buildLoggingEventAndAppend");
//            }
//
//        });
//        ReactorDebugAgent.init();
//        ReactorDebugAgent.processExistingClasses();
	}

}
