package com.app.ServiceLayer;

import org.springframework.stereotype.Service;

import com.app.model.Reservation;

@Service
public interface reservationServiceInter {

	public String doReservation(Reservation reserve);
	
	public String doCancellation(int reservationID);
}
