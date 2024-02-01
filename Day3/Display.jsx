// JobsPage.jsx
import React, { useState } from 'react';
// import './JobsPage.css';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const JobsPage = ({ userJobs, setUserJobs }) => {
//   const removeJob = (jobId) => {
//     // Filter out the job with the specified ID
//     const updatedJobs = userJobs.filter(job => job.id !== jobId);
//     // Update the state with the new array of jobs
//     setUserJobs(updatedJobs);
//   };
//   const clear=(jobid)=>{
//     localStorage.removeItem(jobid)
//   }
const JobsPagee = () => {
    localStorage.clear();
}
  return (
    <div className="jobs-page" style={{
        margin:"0",
        height:"8cm",
        backgroundImage:"linear-gradient(#e6e6e6,#e8e8e8)"
      }}>
      <h1 style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",backgroundImage:"linear-gradient(#e6e6e6,#e8e8e8)",fontSize:"45px",padding:".5cm",marginBottom:"-.3cm",textAlign:"center",
    textShadow:"4px 4px 8px rgb(71, 78, 90)"}}>Current Job Openings</h1>

      <div className="job-listings"
      style={{
        display:"flex"
        ,overflowX:"scroll",
        height:"8cm",
        backgroundImage:"linear-gradient(#e6e6e6,#e8e8e8)",
        alignItems:"center"
      }}>
        {userJobs.map((job) => (
          <div key={job.id} className="job-listing">
           <div className='box1' style={{width:"10cm",height:"7cm"}}>
                  <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>{job.jobTitle}</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> {job.companyName}</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}><p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}>
                        <BusinessCenterIcon/> 0 to 2 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> {job.location}</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Regular</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet",background:"transparent",border:"none"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet",background:"transparent",border:"none"}}>Apply</button>
            {/* <button onClick={()=>clear(job.id)}>clear</button> */}
            {/* <button
              className="apply-button"
              onClick={JobsPagee}
            >
              Clear
            </button> */}
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;