package com.job.jobapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

import com.job.jobapp.Entity.Addjob;
import com.job.jobapp.Entity.Entity;
import com.job.jobapp.Repository.Jobrepo;
import com.job.jobapp.Repository.Repository;

@org.springframework.stereotype.Service
public class Service {
    @Autowired(required = true)
    Repository repo;
    Jobrepo j;
    @Transactional
    public Entity addSignup(Entity e)
    {
        return repo.save(e);
    }
    public List<Entity> getSignupDetails()
    {
        return repo.findAll();
    }
    public void deleteAccount(String email)
    {
        repo.deleteById(email);
    }
    public void UpdateAccount(Entity entity)
    {
        repo.saveAndFlush(entity);
    }
    public void deletejob(long id)
    {
        j.deleteById(id);
    }
    public void Updatejob(Addjob entity)
    {
        j.saveAndFlush(entity);
    }
    public void addJob(Addjob entity)
    {
        j.save(entity);
    }
    public List<Addjob> getJob()
    {
        return j.findAll();
    }
    public Optional<Entity> getSignupDetails(String email) {
        return repo.findById(email);
    }
}
