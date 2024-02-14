// package com.job.jobapp.Entity;
// import java.io.Serializable;
// import java.util.Objects;

// public class EntityCompositeKey implements Serializable {
//     private String email;
//     private String mobilenumber;

   
//     public EntityCompositeKey() {
//     }

  
//     public EntityCompositeKey(String email, String mobilenumber) {
//         this.email = email;
//         this.mobilenumber = mobilenumber;
//     }

    
//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getMobilenumber() {
//         return mobilenumber;
//     }

//     public void setMobilenumber(String mobilenumber) {
//         this.mobilenumber = mobilenumber;
//     }

    
//     @Override
//     public boolean equals(Object o) {
//         if (this == o) return true;
//         if (o == null || getClass() != o.getClass()) return false;
//         EntityCompositeKey that = (EntityCompositeKey) o;
//         return Objects.equals(email, that.email) && Objects.equals(mobilenumber, that.mobilenumber);
//     }

//     @Override
//     public int hashCode() {
//         return Objects.hash(email, mobilenumber);
//     }
// }
