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
const Jobslide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showSlide = () => {
      const images = document.getElementsByClassName("image2");
      const dots = document.getElementsByClassName("dot2");

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

  const handlePrevClick2 = () => {
    if(index>0)
    setIndex(index - 1);
  };

  const handleNextClick2 = () => {
    if(index<1)
    setIndex(index + 1);
  };

  return (
    <div className='slidebodyy' ><br/>
    <div className="containerr2">
      <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textShadow:"4px 4px 8px rgb(71, 78, 90)"}}>Be An Early Applicant</h1>
      <br/>
      <div className="image2 fade2">
        <div className='boxxer'>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
                  <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>We have post for the IT Delivery</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Infosys limited</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 0 to 2 Yrs</p>
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
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>
                      Req. for the Technology Analyst IT Services</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Infosys limited</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}>
                      <BusinessCenterIcon/> 3 to 7 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Pune</p>
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
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>We need Process Lead</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Infosys limited</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 0 to 5 Yrs</p>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px",marginLeft:"5%"}}><LocationOnIcon/> Chennai</p>
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
      <div className="image2 fade2">
      <div className='boxxer'>
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>We need Technical Operations Associate</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Infosys limited</p>
                    <div style={{display:"flex", paddingTop:".3cm"}}>                    
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"18px"}}><BusinessCenterIcon/> 2 to 4 Yrs</p>
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
            <div className='box1' style={{width:"10cm",height:"7cm"}}>
            <div className="boxhead">
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Premium</p>
                    <p style={{marginLeft:"60%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>5 days ago</p>
                  </div>
                  <div className='boxbody' >
                    <h3 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"black",fontSize:"23px"}}>We need IT Delivery</h3>
                    <p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif", paddingTop:".3cm",fontSize:"18px"}}> Infosys limited</p>
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
      
     
      
     
      
      <button id="prev2" onClick={handlePrevClick2}><ArrowCircleLeftIcon/></button>
      <button id="next2" onClick={handleNextClick2}><ArrowCircleRightIcon/></button>

      <div className="dots2">
        <span className="dot2"></span>
        <span className="dot2"></span>
        <span className="dot2"></span>
        <span className="dot2"></span>
        
      </div>
    </div>
    </div>
  );
};

export default Jobslide;
