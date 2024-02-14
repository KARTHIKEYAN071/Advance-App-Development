import React, { useState } from 'react';

import "./apply.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const JobApplicationForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    companys: '',
    title: '',
    phonenumber: '',
    resume: '',
    coverletter: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 async function handleSub (data){
   
    
    const container = {
      name: data.fullname,
      email: data.email,
      company: data.companys,
      title: data.title,
      phonenumber: data.phonenumber,
      resume: data.resume,
      coverletter: data.coverletter
    }
    console.log(container);
    props.Req(container);
    // navigate("/UserRequest")
   
//     try{
//     await axios.post("http://localhost:8082/Apply", container);
//     console.log('Job application submitted successfully:', container);

//     } catch (error) {
//       console.error('Error submitting job application:', error);

//   };
}

  return (
    <div className="JobAppp">
      <h1 style={{ margin: "0px", marginTop: "15px", textAlign: "center", color: "black", marginBottom: "-1cm" }}>Job Application Form</h1>
      <br/>
      <br/>
      <br/>
        <div className='formm'>

          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
<br/>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br/>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="companys"
            value={formData.companys}
            onChange={handleChange}
            // disabled
          />
          <br/>
          <label htmlFor="company">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            // disabled
          />
<br/>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
<br/>
          <label htmlFor="resume">Resume (PDF or Word document):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
<br/>
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea style={{ width: "100%" }}
            id="coverLetter"
            name="coverletter"
            value={formData.coverletter}
            onChange={handleChange}
            required
          />
<br/>
          <button type="submit" onClick={()=>handleSub(formData)} style={{ width: "100%", backgroundColor: "blue" }}>Submit Application</button>
        </div>
    </div>

  );
  };
export default JobApplicationForm