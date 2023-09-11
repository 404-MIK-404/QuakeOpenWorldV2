package com.quakeworld.restservice.service;

import com.quakeworld.restservice.entity.QuakeUsers;
import com.quakeworld.restservice.mapper.QuakeUserMapper;
import com.quakeworld.restservice.mapper.ResultRequestJsonMapper;
import com.quakeworld.restservice.repository.QuakeUsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final QuakeUserDetailService quakeUserDetailService;

    private final QuakeUserMapper quakeUserMapper;

    private final ResultRequestJsonMapper sessionJsonMapper;

    private final QuakeUsersRepository quakeUsersRepository;

    public String getResultSignInUser(String data){
        QuakeUsers user = ServiceJson.convertJsonToObject(data,QuakeUsers.class);
        Object result = sessionJsonMapper.convertToSessionDTO(quakeUserDetailService.auth(user));
        return ServiceJson.convertObjectToJSON(result);
    }

    public String getResultRegistrationUser(String data){
        QuakeUsers user = ServiceJson.convertJsonToObject(data,QuakeUsers.class);
        Object result = sessionJsonMapper.convertToSessionDTO(quakeUserDetailService.regis(user));
        return ServiceJson.convertObjectToJSON(result);
    }

    public String getResultCurrentUser(QuakeUsers user){
        return ServiceJson.convertObjectToJSON(quakeUserMapper.convertQuakerUserToDTO(user));
    }


    public String sendMoneyAnotherUser(QuakeUsers currentUser,String data){
        QuakeUsers userNeedSend = ServiceJson.convertJsonToObject(data,QuakeUsers.class);
        Double moneyNeed = userNeedSend.getMoney();
        userNeedSend = quakeUsersRepository.findByUsername(userNeedSend.getLogin());
        Double moneyCurrentUser = currentUser.getMoney();
        currentUser.setMoney(moneyCurrentUser - moneyNeed);
        userNeedSend.setMoney(userNeedSend.getMoney() + moneyNeed);
        quakeUsersRepository.save(userNeedSend);
        quakeUsersRepository.save(currentUser);
        return ServiceJson.convertObjectToJSON(quakeUserMapper.convertQuakerUserToDTO(currentUser));
    }




}
