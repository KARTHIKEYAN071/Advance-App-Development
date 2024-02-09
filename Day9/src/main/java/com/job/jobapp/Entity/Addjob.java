package com.job.jobapp.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Table(name = "newjobs")
public class Addjob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private long id;
    @Column(name ="jobtype")
    private String jobtype;

    @Column(name ="lastdata")
    private String lastdata;

    @Column(name ="jobname")
    private String jobname;

    @Column(name ="company")
    private String company;

    @Column(name ="duration")
    private String duration;

    @Column(name ="location")
    private String location;

    @Column(name ="keyskill")
    private String keyskill;

}
