package com.aimable01.localoom.service;

import com.aimable01.localoom.model.User;
import com.aimable01.localoom.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    public User signup(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setVerificationCode(generateVerificationCode());
        user.setVerified(false);
        return userRepository.save(user);
    }

    private String generateVerificationCode() {
        return UUID.randomUUID().toString();
    }
}
