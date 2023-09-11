package com.quakeworld.restservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<QuakeServiceError> catchRecordCountNotFoundException(TransformToJsonException e){
        return new ResponseEntity<>(new QuakeServiceError(HttpStatus.NOT_FOUND.value(), e.getMessage(),new Date()), HttpStatus.NOT_FOUND);
    }


}