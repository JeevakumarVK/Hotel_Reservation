package com.app.ServiceLayer;

import org.springframework.stereotype.Service;

import com.app.model.Client;


@Service
public interface myServices {

    public String AddUser(Client client);
    public Integer loginValidation(String email,String pwd);
   
}
