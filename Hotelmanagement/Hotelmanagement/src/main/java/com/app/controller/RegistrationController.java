package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ServiceLayer.reservationServiceInter;
import com.app.model.Reservation;

@RestController
@CrossOrigin(origins = "*")
public class RegistrationController {
	
	@Autowired
	public reservationServiceInter myservices;
	
	@PostMapping("/reserve")
	public String reservation(@RequestBody Reservation reserve)
	{
		return myservices.doReservation(reserve);
	}

	@DeleteMapping("/cancelreservation/{reseravtionID}")
	public String doCancellation(@PathVariable int reseravtionID) {
		return myservices.doCancellation(reseravtionID);
	}
	
}