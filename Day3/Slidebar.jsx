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
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import slide7 from "./slide7.jpg";
import './slide.css'; 
import SearchIcon from '@mui/icons-material/Search';
import Job from '../Job/Job';
import Footer from '../Footer/Footer';
const Slidebar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showSlide = () => {
      const images = document.getElementsByClassName("image");
      const dots = document.getElementsByClassName("dot");

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

  const handlePrevClick = () => {
    if(index>0)
    setIndex(index - 1);
  };

  const handleNextClick = () => {
    if(index<7)
    setIndex(index + 1);
  };

  return (
    <div className='slidebody'><br/>
    <div className="containerr">
      <div className="image fade">
        <img   width="100%" />

        <div className="overlay" style={{backgroundImage: "linear-gradient(rgb(160, 160, 160),white)",marginTop:"-.3cm"}}><br/>
        <h1 className='first' style={{fontSize:"xxx-large",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",textAlign:"center"}}>
          Find your dream job now</h1>
        <h2 style={{textAlign:"center",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",position:"relative"}}>5 lakh+ jobs for you to explore
        </h2></div>
        <div className='bar'><SearchIcon style={{fontSize:"1.7cm",opacity:".5" ,marginLeft:'.5cm',marginTop:".2cm"}}/>
        &nbsp;&nbsp;&nbsp;
        
         <input type='text' className='bara'
          placeholder='Enter Skills/Destination/Companies' 
          style={{width:"12.7cm"}}/>
        <p style={{fontSize:"30px"}}>|</p>&nbsp;&nbsp;&nbsp;&nbsp;<p style={{fontSize:"30px"}}></p>
        <Select className="bara2" defaultValue={0} id="named-select2" name="demo-select" style={{background:"transpatent",fontSize:"25px",width:"7cm",border:"none",marginTop:"-.1cm",opacity:".6"}} required> 
                  <Option className="opp" value={0} style={{display:"none"}}>Select Experience </Option>
                  <Option className="opp" value={"Fresher"}>Fresher</Option>
                  <Option className="opp" value={"1 year"}>1 year</Option>
                  <Option className="opp" value={"2 year"}>2 year </Option>
                  <Option className="opp" value={"3 year"}>3 year</Option>
                  <Option className="opp" value={"4 year"}>4 year</Option>
                  <Option className="opp" value={"5 year & above"}>5 year & above</Option>
                  </Select>
        <KeyboardArrowDownIcon  style={{marginLeft:"0cm"}}/>
        &nbsp;&nbsp;&nbsp;&nbsp;<p style={{fontSize:"30px"}}>|
        </p>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className='bara' placeholder='Enter Location '/>
        <a className='barbtn'>Search</a>
        </div>
      </div>
      <div className="image fade">
        <img src={slide1} alt="Slide 1" width="100%" style={{marginTop:"3.5cm"}}  />

        <div className="overlay" ><h1>"Choose a job you love, and you will never have to work a day in your life. "</h1></div>
      </div>
      <div className="image fade">
        <img src={slide2} alt="Slide 1" width="100%" style={{marginTop:"-2cm"}}/>
        <div className="overlay"><h1>“The best preparation for tomorrow is doing your best today.”</h1></div>
      </div>
      <div className="image fade">
        <img src={slide3} alt="Slide 1" width="100%" style={{marginTop:"5cm"}}/>
        <div className="overlay"><h1>“ If opportunity doesn't knock, build a door.”</h1></div>

      </div>
      <div className="image fade">
        <img src={slide4} alt="Slide 1" width="100%" style={{marginTop:"6cm"}}/>
        <div className="overlay"><h1>"Do your job; be the best at whatever your job description is."</h1></div>

      </div>
      <div className="image fade">
        <img src={slide5} alt="Slide 1" width="100%"  style={{marginTop:"1cm"}}/>
        <div className="overlay"><h1>"IF YOU CAN DREAM IT, YOU CAN DO IT."</h1></div>

      </div>
      <div className="image fade">
        <img src={slide6} alt="Slide 1" width="100%" style={{marginTop:"6.5cm"}}/>
        <div className="overlay"><h1>Rejection is a common occurrence. Learning that early and <br/>often will help you build up the tolerance and <br/>resistance to keep going and keep trying.</h1></div>
      </div>
      <div className="image fade">
        <img src={slide7} alt="Slide 1" width="100%" style={{marginTop:"1cm"}}/>
        <div className="overlay"><h1>" The only way to do great work is to love what you do.<br/>If uou haven't found it yet, keep loking.Dont.t settle."</h1></div>
      </div>
      
     
      
      <button id="prev" onClick={handlePrevClick}><ArrowCircleLeftIcon/></button>
      <button id="next" onClick={handleNextClick}><ArrowCircleRightIcon/></button>

      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        
      </div>
    </div>
      <Job/>
      <Footer/>
      {/* <Job/> */}
    </div>
  );
};

export default Slidebar;
