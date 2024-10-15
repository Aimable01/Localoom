package com.aimable01.localoom.security;

import com.aimable01.localoom.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {

    private final String jwtSecret = "4cf4fbfb2f800b6d461d026a5b18cd0825943a6494620a2eb46d18fa35eece9a";
    private final long accessTokenExpiry = 3_600_000;
    private final long refreshTokenExpiry = 604800_000;

    public String generateAccessToken(User user){
        return Jwts.builder()
                .setSubject(user.getId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + accessTokenExpiry))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String generateRefreshToken(User user){
        return Jwts.builder()
                .setSubject(user.getId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + refreshTokenExpiry))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).getClass(token);
            return true;
        } catch (Exception e) {
            throw new RuntimeException(e);
            return false;
        }
    }
}
