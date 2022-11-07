package com.app.controller;

import com.app.ServiceLayer.myServices;
import com.app.model.Client;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


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
	
	@PostMapping("/login/{email}/{pwd}")
	public Integer loginValidate(@PathVariable String email,@PathVariable String pwd){
	   return myservice.loginValidation(email,pwd);
	}

}
