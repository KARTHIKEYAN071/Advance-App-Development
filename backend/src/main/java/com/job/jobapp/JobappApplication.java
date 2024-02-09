package com.job.jobapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Job Portal",
				version = "1.1.2",
				description = "App Description",
				contact = @Contact(
						name = "KARTHIKEYAN R",
						email = "727721euit071@skcet.ac.in"
						)
				)
		)
		
public class JobappApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobappApplication.class, args);
	}

}
