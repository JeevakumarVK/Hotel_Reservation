package com.app.ServiceLayer;

import com.app.model.Client;
import com.app.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class myServiceImpl implements myServices{

    @Autowired
    private UserRepo repo;

    @Override
    public String AddUser(Client client) {
         repo.save(client);
         return "Registered successfully...";
    }
    
    
    public Client fetchByEmailAndPwd(String email,String pwd) {
    	return repo.findByEmailAndPwd(email,pwd);
    }
}
