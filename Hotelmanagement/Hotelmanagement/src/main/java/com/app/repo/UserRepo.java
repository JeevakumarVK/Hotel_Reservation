package com.app.repo;

import com.app.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepo extends JpaRepository<Client, Integer>{
	
	public Client findByEmail(String email);
	public Client findByEmailAndPwd(String email,String pwd);

}
