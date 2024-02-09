package com.job.jobapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.job.jobapp.Entity.Addjob;

public interface Jobrepo extends JpaRepository<Addjob,Long>{

}
