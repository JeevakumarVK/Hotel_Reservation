package com.app.ServiceLayer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Reservation;
import com.app.repo.reservationRepo;

@Service
public class reservationServiceImpl implements reservationServiceInter {

    @Autowired
    private reservationRepo rrepo;

    @Override
	public String doReservation(Reservation reserve) {
		// TODO Auto-generated method stub
    	if(reserve!=null) {
		rrepo.save(reserve);
		return "1";
    	}
    	else
    	{
    		return "0";
    	}
	}

	@Override
	public String doCancellation(int reservationID) {
		// TODO Auto-generated method stub
		rrepo.deleteById(reservationID);
		return "1";
	}
}
