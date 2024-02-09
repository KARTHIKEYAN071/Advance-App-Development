package com.job.jobapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.job.jobapp.Entity.Entity;

public interface Repository extends JpaRepository<Entity,String>{

    @Query(value = "select * from signupinfo where email=?",nativeQuery = true)
    public Entity checkemail(String email);
    @Query(value = "select * from signupinfo where mobilenumber=?",nativeQuery = true)
    public Entity checkmobilenumber(String mobilenumber);

}
