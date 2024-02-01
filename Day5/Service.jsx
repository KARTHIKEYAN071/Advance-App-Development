import React, { useState, useEffect } from 'react';
import "./service.css"
import pic1 from "./pic1.png"
import pic2 from "./pic 6.png"
import pic3 from "./pic2.jpg"
import pic4 from "./pic3.jpg"
import pic5 from "./pic5.jpg"
import pic6 from "./pic4.jpg"
import CallIcon from '@mui/icons-material/Call';
import NavigateNextIcon1 from '@mui/icons-material/NavigateNext';
// import NavigateNextIcon1 from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Slideshow2 = ({ colors, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % colors.length);

      if (currentSlide === colors.length - 1) {
        setCurrentSlide(0);
      }
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [colors.length, interval, currentSlide]);
  
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + colors.length) % colors.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % colors.length);
  };
  
  return (
    <div className="slideshoww" style={{width:"100%" ,height:"15cm",marginTop:"-1.5cm"}} >
      <div className='conbut' style={{display:"flex"}}>
      <button onClick={handlePrevSlide} style={{marginLeft:"35cm"}}><ArrowBackIosNewIcon /></button>
        <button  onClick={handleNextSlide} style={{marginLeft:"1cm"}}><NavigateNextIcon1 style={{fontSize:"30px"}}/></button>
      </div>
      <div className="slide-container">
        <div
          className={`slide ${currentSlide === 0 ? 'active' : ''}`}
          style={{
            width:"100%" ,height:"15cm",
            backgroundColor: colors[1],
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            
          }}
          >
          <div className='com1' style={{
            backgroundColor: colors[0],
            width:"100%",
            height:"90%",
            
            // alignItems:"center",
            // justifyContent:"center",
            marginTop:"-2.5%",
            display:"flex",
            flexWrap:"wrap"

          }}>
            <div className='combox2'>
              <div className='serimg'>

              <img src={pic1} width="100%" height="100%"/>
              </div>
              <div className='serbody'>
              <h3
              style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center",
              textShadow:"4px 4px 8px rgb(71, 78, 90)",color:"black"}}>Application Highlighter</h3>
              <p style={{fontSize:"20px",paddingTop:".3cm",color:"black"}}>Highlight your job application & improve visibility to
recruiter. Increase your chances of getting a dream job</p>
      <br/>      <h4 style={{color:"green",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>₹ 1699</h4>
              </div>
              <div className='serbot' >
                <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                background:"transparent",color:"blueviolet",fontWeight:"800"}}>Explore</button>
                <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                background:"transparent",backgroundColor:"blueviolet",fontWeight:"800",marginLeft:"15%"}}><CallIcon/>Talk to Expert</button>
              </div>
            </div>
            <div className='combox2'>
            <div className='serimg'>

<img src={pic2} width="100%" height="100%"/>
</div>
<div className='serbody'>
<h3
style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center",
textShadow:"4px 4px 8px rgb(71, 78, 90)",color:"black"}}>Featured Profile</h3>
<p style={{fontSize:"20px",paddingTop:".3cm",color:"black"}}>Get more visibility in the recruiter seraches by
getting a priroity applicant tag with this service</p>
<br/>      <h4 style={{color:"green",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>₹ 1999</h4>
</div>
<div className='serbot' >
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",color:"blueviolet",fontWeight:"800"}}>Explore</button>
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",backgroundColor:"blueviolet",fontWeight:"800",marginLeft:"15%"}}><CallIcon/>Talk to Expert</button>
</div>
             

            </div>
            <div className='combox2'>

            <div className='serimg'>

<img src={pic3} width="100%" height="100%"/>
</div>
<div className='serbody'>
<h3
style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center",
textShadow:"4px 4px 8px rgb(71, 78, 90)",color:"black"}}>Application Booster</h3>
<p style={{fontSize:"20px",paddingTop:".3cm",color:"black"}}>HPriority Applicant service to highlight and circulate
your profile to the recruiters of your choice.</p>
<br/>      <h4 style={{color:"green",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>₹ 3099</h4>
</div>
<div className='serbot' >
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",color:"blueviolet",fontWeight:"800"}}>Explore</button>
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",backgroundColor:"blueviolet",fontWeight:"800",marginLeft:"15%"}}><CallIcon/>Talk to Expert</button>
</div>
            </div>
           
          </div>
        </div>
        
        
        <div
          className={`slide ${currentSlide === 2 ? 'active' : ''}`}
          style={{
            width:"100%" ,height:"15cm",
            backgroundColor: colors[1],
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
           <div className='com1' style={{
                backgroundColor: colors[0],
                width:"100%",
                height:"90%",
                
                // alignItems:"center",
                // justifyContent:"center",
                marginTop:"-2.5%",
                display:"flex",
                flexWrap:"wrap"
          
          }}>
            <div className='combox2'>
            <div className='serimg'>

<img src={pic4} width="100%" height="100%"/>
</div>
<div className='serbody'>
<h3
style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center",
textShadow:"4px 4px 8px rgb(71, 78, 90)",color:"black"}}>Resume Writing</h3>
<p style={{fontSize:"20px",paddingTop:".3cm",color:"black"}}>HGet a professional resume written by experts.
Highlight the right skills & catch recruiter attention</p>
<br/>      <h4 style={{color:"green",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>₹ 2199</h4>
</div>
<div className='serbot' >
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",color:"blueviolet",fontWeight:"800"}}>Explore</button>
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",backgroundColor:"blueviolet",fontWeight:"800",marginLeft:"15%"}}><CallIcon/>Talk to Expert</button>
</div>
            </div>
            <div className='combox2'>
            <div className='serimg'>

<img src={pic5} width="100%" height="100%"/>
</div>
<div className='serbody'>
<h3
style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center",
textShadow:"4px 4px 8px rgb(71, 78, 90)",color:"black"}}>Jobs on the Move</h3>
<p style={{fontSize:"20px",paddingTop:".3cm",color:"black"}}>Customized weekly job alerts matching your
criteria from all leading portals & get hired faster</p>
<br/>      <h4 style={{color:"green",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>₹ 3999</h4>
</div>
<div className='serbot' >
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",color:"blueviolet",fontWeight:"800"}}>Explore</button>
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",backgroundColor:"blueviolet",fontWeight:"800",marginLeft:"15%"}}><CallIcon/>Talk to Expert</button>
</div>

            </div>
            <div className='combox2'>

            <div className='serimg'>

<img src={pic6} width="100%" height="100%"/>
</div>
<div className='serbody'>
<h3
style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center",
textShadow:"4px 4px 8px rgb(71, 78, 90)",color:"black"}}>Improved Visibility Package</h3>
<p style={{fontSize:"20px",paddingTop:".3cm",color:"black"}}>Specialized package to improve your visibility in
recruiter searches & resume shared with 1000+ recr...</p>
   <h4 style={{color:"green",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",marginTop:".3cm"}}>₹ 3949</h4>
</div>
<div className='serbot' >
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",color:"blueviolet",fontWeight:"800"}}>Explore</button>
  <button style={{fontSize:'20px',fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
  background:"transparent",backgroundColor:"blueviolet",fontWeight:"800",marginLeft:"15%"}}><CallIcon/>Talk to Expert</button>
</div>
            </div>
            
          </div>
        </div>
        <div
        
          className={`slide ${currentSlide === 2 ? 'active' : ''}`}
          style={{
            width:"100%" ,height:"12cm",
            backgroundColor: colors[3],
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          Slide 4
        </div>
       
      </div>
    </div>
  );
};




  const backgroundColors = ['#e8e8e8', '#e8e8e8'];

const Service = () => {
    return (
        <div className='ccc' id='jobSection3'>
          <h1 style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",backgroundImage:"linear-gradient(#e6e6e6,#e8e8e8)",fontSize:"45px",padding:".5cm",marginBottom:"-.3cm",textAlign:"center",
    textShadow:"4px 4px 8px rgb(71, 78, 90)"}}>Premium Services</h1>
          <Slideshow2 colors={backgroundColors} interval={5000} />
        </div>
      );
}

export default Service;