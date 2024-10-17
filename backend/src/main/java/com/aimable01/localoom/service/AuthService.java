package com.aimable01.localoom.service;

import com.aimable01.localoom.dto.JwtResponse;
import com.aimable01.localoom.dto.LoginRequest;
import com.aimable01.localoom.dto.SignupRequest;
import com.aimable01.localoom.model.User;
import com.aimable01.localoom.security.JwtTokenProvider;

public class AuthService {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final EmailService emailService;

    public AuthService(UserService userService, JwtTokenProvider jwtTokenProvider, EmailService emailService) {
        this.userService = userService;
        this.jwtTokenProvider = jwtTokenProvider;
        this.emailService = emailService;
    }

    public void signup(SignupRequest signupRequest) {
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());

        user = userService.signup(user);

        emailService.sendVerificationEmail(user);

    }

    public JwtResponse login(LoginRequest loginRequest) {

        User user = userService.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new RuntimeException("Email not found"));
        if (!user.isVerified()) {
            throw new RuntimeException("Email is not verified");
        }

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            throw new RuntimeException("Password not matched");
        }

        String accessToken = jwtTokenProvider.generateAccessToken(user);
        String refreshToken = jwtTokenProvider.generateRefreshToken(user);

        return new JwtResponse(accessToken, refreshToken);
    }

    public void verifyEmail(String email, String code) {
        User user = userService.findByEmail(email).orElseThrow(() -> new RuntimeException("Email not found"));
        if (!user.getVerificationCode().equals(code)) {
            throw new RuntimeException("Verification code not matched");
        }
        user.setVerified(true);
        user.setVerificationCode(null);
        userService.save(user);
    }
}
