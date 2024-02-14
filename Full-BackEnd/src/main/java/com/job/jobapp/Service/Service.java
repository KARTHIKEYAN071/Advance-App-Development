package com.job.jobapp.Service;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

import com.job.jobapp.Entity.Addjob;
import com.job.jobapp.Entity.Entity;
import com.job.jobapp.Repository.Jobrepo;
import com.job.jobapp.Repository.Repository;

@org.springframework.stereotype.Service
public class Service {
    @Autowired(required = true)
    Repository repo;
    @Autowired
    Jobrepo j;

  
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
    public String deletejob(long id)
    {
        if(j.findid(id)!=null){

        j.deleteById(id);
        return "Deleted";
    }
        else
        {
            return "ID Not Found";
        }
    }
    public void Updatejob(Addjob entity)
    {
        j.saveAndFlush(entity);
    }
    public Addjob addJob(Addjob add)
    {
       
         return j.save(add);
    }
    public List<Addjob> getJob()
    {
        return j.findAll();
    }
    public Optional<Entity> getSignupDetails(String email) {
        return repo.findById(email);
    }
}
