package com.app.controller;

import com.app.ServiceLayer.myServices;
import com.app.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.app.repo.UserRepo;

@RestController
@CrossOrigin(origins = "*")
public class UserController {


	@Autowired
	private myServices myservice;
	
	@PostMapping("/user")
	public String registerUser(@RequestBody Client client) {

	 System.out.println("Controller called");
	 return myservice.AddUser (client);

		
	}
	
	@PostMapping("/login")
	public Client loginUser(@RequestBody Client client) {
		String email = client.getEmail();
		String pwd = client.getPwd();
		return myservice.fetchByEmailAndPwd(email,pwd);
	}

}
