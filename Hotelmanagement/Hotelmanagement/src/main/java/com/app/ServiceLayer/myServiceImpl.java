package com.app.ServiceLayer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Client;
import com.app.repo.UserRepo;


@Service
public class myServiceImpl implements myServices{

    @Autowired
    private UserRepo repo;
    
    
    int response;

    @Override
    public String AddUser(Client client) {
         repo.save(client);
         return "Registered successfully...";
    }
    
    
    @Override
    public Integer loginValidation(String email, String pwd) {

        if(repo.getByemail(email).getEmail().equals(email) && repo. getByemail(email).getPwd().equals(pwd))
        {
            response = 1;
        }
        else
        {
            System.out.println(repo.getByemail(email).getEmail()+" "+email);
            System.out.println(repo.getByemail(email).getPwd()+" "+pwd);
            response = 0;
        }
        return response;
    }
    
    
}
