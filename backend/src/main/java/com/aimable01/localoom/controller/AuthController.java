package com.aimable01.localoom.controller;

import com.aimable01.localoom.dto.JwtResponse;
import com.aimable01.localoom.dto.LoginRequest;
import com.aimable01.localoom.dto.SignupRequest;
import com.aimable01.localoom.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest signupRequest) {
        authService.signup(signupRequest);
        return ResponseEntity.ok("User registered successfully, please verify your email");
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verify(@RequestParam String email,@RequestParam String code) {
        authService.verifyEmail(email, code);
        return ResponseEntity.ok("Email verified successfully");
    }
}
