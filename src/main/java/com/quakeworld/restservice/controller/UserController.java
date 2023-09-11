package com.quakeworld.restservice.controller;

import com.quakeworld.restservice.entity.QuakeUsers;
import com.quakeworld.restservice.exception.TransformToJsonException;
import com.quakeworld.restservice.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping(value = "/api/quakeopenworld/v1",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private final UserService userService;
    

    @PostMapping("/sign-in-user")
    public String getResultSignIn(@RequestBody String body){
        return Optional.ofNullable(userService.getResultSignInUser(body))
                .orElseThrow( () -> new TransformToJsonException("Ошибка !"));
    }

    @PostMapping("/registraion-user")
    public String getResultRegistrationUser(@RequestBody String body){
        return Optional.ofNullable(userService.getResultRegistrationUser(body))
                .orElseThrow( () -> new TransformToJsonException("Ошибка !"));
    }



    @GetMapping("/me")
    public String getInfoAboutMe(@AuthenticationPrincipal QuakeUsers user){
        return Optional.of(userService.getResultCurrentUser(user))
                .orElseThrow(() -> new TransformToJsonException("Ошибка !"));
    }

    @PostMapping("/send-money")
    public String sendMoneyAnotherUser(@AuthenticationPrincipal QuakeUsers user, @RequestBody String data){
        return Optional.of(userService.sendMoneyAnotherUser(user,data))
                .orElseThrow(() -> new TransformToJsonException("Ошибка !"));
    }



}
