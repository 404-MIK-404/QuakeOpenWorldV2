package com.quakeworld.restservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuakeServiceError {

    private int statusCode;
    private String message;
    private Date timeStamp;

}
