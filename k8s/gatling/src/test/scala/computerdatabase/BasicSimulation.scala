package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.util.Random

class BasicSimulation extends Simulation {

  val tokenProvider = new TokenProvider()
  val feeder = (for (i <- 0 until 1000) yield {
    Map("token" -> ("Bearer " + tokenProvider.createToken(s"user-$i")))
  }).circular

//  private val baseUrl= "http://api.carpooling.ga"
  private val baseUrl= "http://localhost:8081"
  private val endpoint = "/api/users/remote-call?delay=1000"
//  private val endpoint = "/api/users/me"
  private val contentType = "application/json"
  private val requestCount = 1


  private val httpConf = http.baseUrl(baseUrl)
    .disableCaching
    .disableWarmUp
    .acceptHeader("application/json;charset=UTF-8")
    .shareConnections

  private val test = repeat(requestCount) {
    exec(http("me")
      .get(endpoint)
      .header("Content-Type", contentType)
      .header("Authorization", "${token}")
      .check(status.is(200)))
  }

  private val scenarioTest = scenario("BootLoadSimulation")
    .feed(feeder)
    .exec(test)

//  setUp(scenarioTest.inject(constantConcurrentUsers(100) during(1 minute))).protocols(httpConf)

  setUp(scenario("BBConf simulation")
    .feed(feeder)
    .exec(exec(http("start")
      .post("/bbconf/simulation/start")
      .header("Content-Type", contentType)
      .header("Roles", "USER")
      .check(status.is(200))))
    .inject(constantConcurrentUsers(2) during(1 minute)))
    .protocols(httpConf)
}
