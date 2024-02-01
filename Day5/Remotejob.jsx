import React, { useState, useEffect } from 'react';
import slide1 from "./slide3.jpg";
import slide2 from "./slide1.jpg";
import slide3 from "./slide2.png";
import HomeIcon from '@mui/icons-material/Home';
import slide4 from "./slide5.jpg";
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import slide5 from "./slide4.jpg";
import slide6 from "./slide6.jpg";
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import slide7 from "./slide7.jpg";
// import './slide.css'; 
import SearchIcon from '@mui/icons-material/Search';
import Job from '../Job/Job';
import Footer from '../Footer/Footer';
const Remotejob = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showSlide = () => {
      const images = document.getElementsByClassName("image3");
      const dots = document.getElementsByClassName("dot3");

      for (let j = 0; j < images.length; j++)
        images[j].style.display = "none";

      for (let j = 0; j < dots.length; j++)
        dots[j].className = dots[j].className.replace(" active", "");

        if (index >= images.length)  // Update the condition here
        setIndex(0);

     

      if (index < 0)
        setIndex(images.length - 1);

      images[index].style.display = "block";
      dots[index].className += " active";
    };

    showSlide();
  }, [index]);

  const handlePrevClick3 = () => {
    if(index>0)
    setIndex(index - 1);
  };

  const handleNextClick3 = () => {
    if(index<1)
    setIndex(index + 1);
  };

  return (
    <div className='slidebodyy' style={{background:"#e8e8e8", marginTop:"-.5cm"}}><br/>
    <div className="containerr3" style={{background:"transparent"}}>
      <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textShadow:"4px 4px 8px rgb(71, 78, 90)"}}>Remote Jobs</h1>
      <br/>
      <div className="image3 fade3">
        <div className='boxxer'>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
                  <div className="boxhead">
                  
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Hot</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>Aem Developer</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Heptarc technology solutions privat ...</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 7 to 10 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Hyderabad</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Remote</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet"}}>Apply</button>
                  </div>
            </div>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Hot</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>
                    ExecuiveRecruiter</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}>Aasaanjobs private limited hiring...</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                  
                      <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}>
                      <BusinessCenterIcon/> 1 to 3 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Mumbai City</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Remote</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet"}}>Apply</button>
                  </div>
            </div>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Hot</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>Tableau Developer</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Heptarc technology solutions privat ...</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 0 to 5 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Chennai</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Remote</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet"}}>Apply</button>
                  </div>
            </div>
        </div>
      </div>
      <div className="image3 fade3">
      <div className='boxxer'>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>Consultant Gynaecologist</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Aics consultancy service pvt. Itd..</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 1 to 4 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Punjab</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Remote</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet"}}>Apply</button>
                  </div>
            </div>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>Recruiter Execuive</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Aasaanjobs private limited hiring ...</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 0 to 2 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Hyderabad</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Regular</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet"}}>Apply</button>
                  </div>

            </div>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>We Needs for Team Lead</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Infosys limited</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 3 to 5 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Bangalore</p>
                    </div>
                    <div style={{display:"flex", paddingTop:".4cm"}}>                    
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px"}}>Be An Early Applicant</li>
                    <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"15px",marginLeft:"5%"}}>Regular</li>
                    </div>

                  </div>
                  <div className='boxfoot' style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"blueviolet",fontSize:"23px"}}>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",color:"blueviolet"}}>Not Interested</button>
                          <button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"17px",fontWeight:"800",marginLeft:"40%",color:"blueviolet"}}>Apply</button>
                  </div>

            </div>
        </div>
      </div>
      
     
      
     
      
      <button id="prev3" onClick={handlePrevClick3}><ArrowCircleLeftIcon/></button>
      <button id="next3" onClick={handleNextClick3}><ArrowCircleRightIcon/></button>

      <div className="dots3">
        <span className="dot3"></span>
        <span className="dot3"></span>
        <span className="dot3"></span>
        <span className="dot3"></span>
        
      </div>
    </div>
    </div>
  );
};

export default Remotejob;
