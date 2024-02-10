package com.job.jobapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.job.jobapp.Entity.Addjob;

@Repository
public interface Jobrepo extends JpaRepository<Addjob,Long>{

    @Query(value = "select * from newjobs where id=?",nativeQuery = true)
    public Addjob findid(long id);
}
