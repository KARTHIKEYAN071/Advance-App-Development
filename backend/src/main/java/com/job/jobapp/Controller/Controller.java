package com.job.jobapp.Controller;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import com.job.jobapp.Entity.Entity;
import com.job.jobapp.Repository.Repository;
import com.job.jobapp.Service.Service;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
            @GetMapping("/show")
            public List<Entity> GetMapping() {
                return ser.getSignupDetails();
            }
            @DeleteMapping("/deleteAccount/{email}")
            public String deleteAccount(@PathVariable("email") String  email)
            {
                ser.deleteAccount(email);
                return "Your Account Deleted";
            }
            @PutMapping("/UpdateAccount")
            public Entity UpdateAccount(@RequestBody Entity entity) {
                ser.UpdateAccount(entity);
                return entity;
            }
}
