package com.examly.springapp.exception;

import org.springframework.http.*;

import org.springframework.web.bind.MethodArgumentNotValidException;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)

    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {

        String message = ex.getBindingResult().getFieldErrors().stream()

                .map(e -> e.getDefaultMessage())

                .collect(Collectors.joining("; "));

        return new ResponseEntity<>(Map.of("message", message), HttpStatus.BAD_REQUEST);

    }

}
