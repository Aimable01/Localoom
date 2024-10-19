package com.aimable01.localoom.service;

import com.aimable01.localoom.dto.JwtResponse;
import com.aimable01.localoom.dto.LoginRequest;
import com.aimable01.localoom.dto.SignupRequest;
import com.aimable01.localoom.model.User;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserService userService;
    private final JwtService jwtService;

    public AuthService(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
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

        String accessToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateToken(user);

        return new JwtResponse(accessToken, refreshToken);
    }
}
