package com.quakeworld.restservice.service;

import com.google.gson.Gson;
import org.springframework.stereotype.Service;

@Service
public class ServiceJson {

    private static final Gson gsonConverted = new Gson();

    public static String convertObjectToJSON(Object object){
        return gsonConverted.toJson(object);
    }
    public static  <T> T convertJsonToObject(String data,Class<? extends Object> cl){
        return (T) gsonConverted.fromJson(data,cl);
    }
}
