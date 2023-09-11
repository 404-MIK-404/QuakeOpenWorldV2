package com.quakeworld.restservice.service;

import com.mongodb.lang.NonNull;
import com.quakeworld.restservice.entity.QuakeUsers;
import com.quakeworld.restservice.repository.QuakeUsersRepository;
import com.quakeworld.restservice.security.JwtProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class QuakeUserDetailService  implements UserDetailsService {

    private final QuakeUsersRepository quakeUsersRepository;

    private final PasswordEncoder encoder;

    private JwtProvider jwtProvider;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return quakeUsersRepository.findByUsername(username);
    }

    public String auth(@NonNull QuakeUsers user){
        QuakeUsers findUs = quakeUsersRepository.findByUsername(user.getUsername());
        if (encoder.matches(user.getPassword(),findUs.getPassword())){
            return jwtProvider.generateToken(user.getLogin());
        }
        return null;
    }

    public String regis(QuakeUsers user){
        try {
            user.setPassword(encoder.encode(user.getPassword()));
            quakeUsersRepository.save(user);
            return "successfully";
        } catch (RuntimeException ex){
            return null;
        }
    }

}
