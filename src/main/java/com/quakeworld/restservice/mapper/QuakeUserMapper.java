package com.quakeworld.restservice.mapper;


import com.quakeworld.restservice.dto.QuakeUserDTO;
import com.quakeworld.restservice.entity.QuakeUsers;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuakeUserMapper {

    QuakeUserDTO convertQuakerUserToDTO(QuakeUsers quakeUsers);

}
