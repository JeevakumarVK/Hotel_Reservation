package com.app.ServiceLayer;

import com.app.model.Client;
import org.springframework.stereotype.Service;

@Service
public interface myServices {

    public String AddUser(Client client);
    public Integer loginValidation(String email,String pwd);
}
