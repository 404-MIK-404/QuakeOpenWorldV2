package com.quakeworld.restservice.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Calendar;

@Component
public class JwtProvider {

    @Value("jwt.secret")
    private String secret;

    public String generateToken(String login) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.YEAR,1);
        return Jwts.builder()
                .setSubject(login)
                .setExpiration(calendar.getTime())
                .signWith(SignatureAlgorithm.HS512,secret)
                .compact();
    }


    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (Exception e){
            return false;
        }
    }

    public String getLogin(String token){
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

}
