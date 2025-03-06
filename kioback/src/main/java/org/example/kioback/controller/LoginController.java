package org.example.kioback.controller;

<<<<<<< HEAD
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
=======
>>>>>>> 6a8db427 (first commit)
import org.example.kioback.dto.LoginRequest;
import org.example.kioback.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

<<<<<<< HEAD
    // 로그인 API (세션 생성)
    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        boolean isValidUser = userService.validateUser(username, password);

        if (isValidUser) {
            HttpSession session = request.getSession(true);
            session.setAttribute("user", username);
            return ResponseEntity.ok().body(Map.of("message", "로그인 성공!"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "로그인 실패"));
        }
    }

    // 로그아웃 API (세션 삭제)
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok().body(Map.of("message", "로그아웃 성공!"));
    }

    // 로그인 상태 확인 API
    @GetMapping("/status")
    public ResponseEntity<?> getSessionStatus(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute("user") != null) {
            return ResponseEntity.ok().body(Map.of("loggedIn", true, "user", session.getAttribute("user")));
        } else {
            return ResponseEntity.ok().body(Map.of("loggedIn", false));
        }
    }
}
=======
    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String tableNumber = loginRequest.getTableNumber();
        String password = loginRequest.getPassword();

        // 로그인 검증 서비스 호출
        boolean isValidUser = userService.validateUser(tableNumber, password);

        if (isValidUser) {
            return ResponseEntity.ok().body(Map.of("message", "로그인 성공!"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "잘못된 테이블 번호 또는 비밀번호"));
        }
    }
}
>>>>>>> 6a8db427 (first commit)
