package com.job.jobapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import com.job.jobapp.Entity.Entity;
import com.job.jobapp.Repository.Repository;

@org.springframework.stereotype.Service
public class Service {
    @Autowired(required = true)
    Repository repo;
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
}
