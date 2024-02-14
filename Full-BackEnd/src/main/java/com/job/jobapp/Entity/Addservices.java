package com.job.jobapp.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name = "service")
public class Addservices {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private long id;
    @Column (name="servicename")
    private String service;
    @Column (name="imageurl")
    private String imageurl;

    @Column (name="duration")
    private String duration;
    @Column (name="description")
    private String description;

    @Column (name="information")
    private String information;
    @Column (name="rating")
    private String rating;
}
