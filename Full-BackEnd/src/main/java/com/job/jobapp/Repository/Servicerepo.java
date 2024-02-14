package com.job.jobapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.job.jobapp.Entity.Addservices;

public interface Servicerepo extends JpaRepository<Addservices,Long> {

    @Query(value = "select * from service where id=?",nativeQuery = true)
    public Addservices checkid(long id);

}
