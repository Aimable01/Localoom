package com.aimable01.localoom.service;

import com.aimable01.localoom.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    private final String SECRET_KEY = "4cf4fbfb2f800b6d461d026a5b18cd0825943a6494620a2eb46d18fa35eece9a";

    // sign secret key
    private SecretKey getSigninKey(){
        byte[] keybytes = Decoders.BASE64URL.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keybytes);
    }

    // generate token
    public String generateToken(User user){
        String token = Jwts
                .builder()
                .subject(user.getId())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
                .signWith(getSigninKey())
                .compact();

        return token;
    }

    // get all claims
    private Claims getClaimsFromToken(String token){
        return Jwts
                .parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    // get single claim
    private <T> T getClaim(String token, Function<Claims, T> claimsResolver){
        Claims claims = getClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    // get token expiry
    private Date getExpiry(String token){
        return getClaim(token, Claims::getExpiration);
    }

    // get id
    public String getId(String token){
        return getClaim(token, Claims::getSubject);
    }

    // token expired
    private boolean isTokenExpired(String token){
        return getExpiry(token).before(new Date());
    }

    // validate token
    public boolean isValid(String token, User user){
        String id = getId(token);
        return (id != null && id.equals(user.getId())) && !isTokenExpired(token);
    }
}
