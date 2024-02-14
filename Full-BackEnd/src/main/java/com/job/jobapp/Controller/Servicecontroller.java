package com.job.jobapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.job.jobapp.Entity.Addservices;
import com.job.jobapp.Repository.Servicerepo;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
public class Servicecontroller {
    @Autowired
    Servicerepo repo;
    
    @SuppressWarnings("null")
    @PostMapping("/addservice")
    public Addservices postMethodName(@RequestBody Addservices entity) {
        
        return repo.save(entity);
    }

    @SuppressWarnings("null")
    @GetMapping("/getservice")
    public List<Addservices> getMethodName() {
        
        return repo.findAll();
    }
    
    @SuppressWarnings("null")
    @PutMapping("/updateservice/{id}")
    public String updateMethodName(@PathVariable long id,@RequestBody Addservices a) {
        
        if(repo.checkid(id)!=null)
        {
            repo.saveAndFlush(a);
            return "Updated";
        }
        return "[ Invalid ID (or) ID not found ]";  
    }

    @SuppressWarnings("null")
    @DeleteMapping("/delservice/{id}")
    public String del(@PathVariable long id)
    {
        if(repo.checkid(id)!=null)
        {
            repo.deleteById(id);
            return "Service Deleted";
        }
            return "Service Not Deleted - Check ID !";
    }
    

}
