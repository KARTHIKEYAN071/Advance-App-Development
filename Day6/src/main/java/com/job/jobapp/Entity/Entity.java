package com.job.jobapp.Entity;

import jakarta.persistence.Column;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
// import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// @IdClass(EntityCompositeKey.class)
@jakarta.persistence.Entity
@Table(name = "signupinfo")
public class Entity {
        @Id
        @Column(name="email")
        private String  email;
        
        @Column(name="mobilenumber")
        private String  mobilenumber;

        @Column(name="fullname")
        private String  fullname;
        @Column(name="qualification")
        private String  qualification;
       
        @Column(name="password")
        private String  password;
        
        @Column(name="jobfunction")
        private String  jobfunction;
        @Column(name="experience")
        private String  experience;
        @Column(name="gender")
        private String  gender;
        @Column(name="location")
        private String  location;
        @Column(name="keyskill")
        private String  keyskill;
        @Override
        public String toString() {
                return "Entity [email=" + email + ", mobilenumber=" + mobilenumber + ", fullname=" + fullname
                                + ", qualification=" + qualification + ", password=" + password + ", jobfunction="
                                + jobfunction + ", experience=" + experience + ", gender=" + gender + ", location="
                                + location + ", keyskill=" + keyskill + "]";
        }

        

        // @Column(name="filename")
        // private String  filename;
        // @Lob
        // private byte[] resume;

        
        
}
