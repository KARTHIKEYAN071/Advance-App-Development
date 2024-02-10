package com.job.jobapp.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RestController;

import com.job.jobapp.Entity.Addjob;
import com.job.jobapp.Entity.Entity;
import com.job.jobapp.Repository.Jobrepo;
import com.job.jobapp.Repository.Repository;
import com.job.jobapp.Service.Service;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
// @CrossOrigin(origins = "http://locahost:3000")

public class Controller {

            @Autowired
            Service ser;
            @Autowired
            Repository repo;
            @Autowired
            Jobrepo j;
            @Tag(name = "Add SignUp Details",description = "End Points to Adding New User")
            @PostMapping("/addSignup")
            public String postMethodName(@RequestBody Entity e) {

                if(repo.checkemail(e.getEmail())==null)
                {
                    if(repo.checkmobilenumber(e.getMobilenumber())==null){
                    ser.addSignup(e);
                    return "Details Added";
                    }
                    else{
                        return "Mobile Number Already Used";
                    }
                }
                 return "Email already exist";

            }
            @Tag(name = "Showing SignUp Details",description = "End Points to Seeing All users")
            @GetMapping("/show")
            public List<Entity> GetMapping() {
                return ser.getSignupDetails();
            }
            @GetMapping("/show/{email}")
            public Optional<Entity> GetMapping(@PathVariable String email) {
                return ser.getSignupDetails(email);
            }

            @Tag(name = " Deleteing Account ",description = "End Points to Deleting Account using email")
            @DeleteMapping("/deleteAccount/{email}")
            public String deleteAccount(@PathVariable("email") String  email)
            {
                ser.deleteAccount(email);
                return "Your Account Deleted";
            }

            @Tag(name = "Updating SignUp Details",description = "End Points to Update Existing User")
            @PutMapping("/UpdateAccount/{email}")
            public String UpdateAccount(@RequestBody Entity entity,@PathVariable("email") String email) {
            if(repo.checkemail(email)!=null)
               { 
                if(entity.getEmail().equals(email)){
                        if(repo.checkmobilenumber(entity.getMobilenumber())==null){
                        ser.UpdateAccount(entity);
                        return entity.toString()+"\n Updated";
                        }
                        else
                        return "Mobile Number Already Exist";
               }
               else
              return "Given Email Not Matched";

            }
            return "Email Not Found";

            }
            /////////////////////NEW JOBS/////////////////////////
            @Tag(name = "Add New Jobs",description = "End Points to Adding new Jobs")
            @PostMapping("/addjob")
            public Addjob postMethodName(@RequestBody Addjob add) {
                return ser.addJob(add);
           
            }

            @Tag(name = "Showing New Jobs Available",description = "End Points to Seeing All users")
            @GetMapping("/showjob")
            public List<Addjob> Getjob() {

                return ser.getJob();
            }
            @Tag(name = " Deleteing New Jobs",description = "End Points to Deleting Account using email")
            @DeleteMapping("/deletejob/{id}")
            public String deleteAccount(@PathVariable("id") long  id)
            {
                if(j.findid(id)!=null){

                    j.deleteById(id);
                    return "Account Deleted";
                }
                else
                {
                    return "Account Not Found";
                }
            }
            @Tag(name = "Updating Job Details",description = "End Points to Update Existing job")
            @PutMapping("/UpdateJobDetails")
            public Addjob UpdateJob(@RequestBody Addjob entity) {
                ser.Updatejob(entity);
                return entity;
            }
            /////////////////END//////////////////////////////////////////////////////////////////////
            
}
