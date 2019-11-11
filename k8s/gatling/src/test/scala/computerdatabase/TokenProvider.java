package computerdatabase;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.ZonedDateTime;
import java.util.Date;

public class TokenProvider {

    private final Logger log = LoggerFactory.getLogger(TokenProvider.class);

    private static final String AUTHORITIES_KEY = "auth";
    private String secretKey = "CommutING?";
    private long tokenValidityInSeconds = 60 * 60 * 1000;

    public String createToken(String username) {

        Date expirationDate = Date.from(ZonedDateTime.now()
                .plusSeconds(tokenValidityInSeconds)
                .toInstant());

        return Jwts.builder()
                .setSubject(username)
                .claim(AUTHORITIES_KEY, "USER")
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .setExpiration(expirationDate)
                .compact();
    }

}