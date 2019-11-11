FROM denvazh/gatling:3.2.1

WORKDIR /gatling

COPY pom.xml/ /gatling
COPY src /gatling/src

RUN mvn gatling:test
