package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Reservation;

public interface reservationRepo extends JpaRepository<Reservation,Integer>{

}
