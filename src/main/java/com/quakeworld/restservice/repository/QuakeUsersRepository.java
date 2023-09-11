package com.quakeworld.restservice.repository;

import com.quakeworld.restservice.entity.QuakeUsers;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface QuakeUsersRepository extends MongoRepository<QuakeUsers,Long> {

    @Query(value = "{ login: ?0,  password:  ?1 }")
    QuakeUsers findByUsernameAndPassword(String userName, String password);

    @Query(value = "{login: ?0}")
    QuakeUsers findByUsername(String userName);

}
