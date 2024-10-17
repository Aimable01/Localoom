package com.aimable01.localoom.service;

import com.aimable01.localoom.dto.JwtResponse;
import com.aimable01.localoom.dto.LoginRequest;
import com.aimable01.localoom.dto.SignupRequest;
import com.aimable01.localoom.model.User;
import com.aimable01.localoom.security.JwtTokenProvider;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthService(UserService userService, JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public void signup(SignupRequest signupRequest) {
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());

        user = userService.signup(user);

    }

    public JwtResponse login(LoginRequest loginRequest) {

        User user = userService.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new RuntimeException("Email not found"));

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            throw new RuntimeException("Password not matched");
        }

        String accessToken = jwtTokenProvider.generateAccessToken(user);
        String refreshToken = jwtTokenProvider.generateRefreshToken(user);

        return new JwtResponse(accessToken, refreshToken);
    }
}
