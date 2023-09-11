package com.quakeworld.restservice.mapper;

import com.quakeworld.restservice.dto.ResultRequestJson;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ResultRequestJsonMapper {


    ResultRequestJson convertToSessionDTO(String result);

}
