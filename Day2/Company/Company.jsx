import React, { useState, useEffect } from 'react';
import "./company.css"
import NavigateNextIcon1 from '@mui/icons-material/NavigateNext';
// import NavigateNextIcon1 from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import img1 from "./amazon.png"
import img2 from "./img1.png"
import img3 from "./img2.png"
import img4 from "./img3.png"
import img5 from "./img4.png"
import img6 from "./img5.png"
import img7 from "./img12.png"
import img8 from "./img6.png"
import img9 from "./img7.png"
import img10 from "./img8.png"
import img11 from "./img9.png"
import img12 from "./img10.png"
const Slideshow = ({ colors, interval = 5000 }) => {
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
    <div className="slideshoww" style={{width:"100%" ,height:"12cm",marginTop:"-1.5cm"}} >
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
            width:"85%",
            height:"74%",
            
            alignItems:"center",
            justifyContent:"center",
            marginTop:"-10%",
            display:"flex",
            flexWrap:"wrap"

          }}>
            <div className='combox'>
              <img src={img1} width="100%" height="100%"/>
            </div>
            <div className='combox'>
              <img src={img2} width="100%" height="100%"/>

            </div>
            <div className='combox'>

              <img src={img3} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img4} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img5} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img6} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img7} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img8} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img9} width="100%" height="100%"/>
            </div>
            <div className='combox'>
              <img src={img10} width="100%" height="100%"/>

            </div>
            <div className='combox'>
              <img src={img11} width="100%" height="100%"/>

            </div>
            <div className='combox'>
              <img src={img12} width="100%" height="100%"/>

            </div>

          </div>
        </div>
        <div
          className={`slide ${currentSlide === 1 ? 'active' : ''}`}
          style={{
            width:"100%" ,height:"15cm",
            backgroundColor: colors[1],
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
           <div className='com1' style={{
              backgroundColor: colors[0],
              width:"85%",
              height:"74%",
              
              alignItems:"center",
              justifyContent:"center",
              marginTop:"-10%",
              display:"flex",
              flexWrap:"wrap"
          
        }}>
          <div className='combox'>
              <img src={img1} width="100%" height="100%"/>
            </div>
            <div className='combox'>
              <img src={img2} width="100%" height="100%"/>

            </div>
            <div className='combox'>

              <img src={img3} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img4} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img5} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img6} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img7} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img8} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img9} width="100%" height="100%"/>
            </div>
            <div className='combox'>
              <img src={img10} width="100%" height="100%"/>

            </div>
            <div className='combox'>
              <img src={img11} width="100%" height="100%"/>

            </div>
            <div className='combox'>
              <img src={img12} width="100%" height="100%"/>

            </div>


          </div>
        </div>
        <div
          className={`slide ${currentSlide === 2 ? 'active' : ''}`}
          style={{
            width:"100%" ,height:"15cm",
            backgroundColor: colors[2],
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
           <div className='com1' style={{
             backgroundColor: colors[0],
             width:"85%",
             height:"74%",
             
             alignItems:"center",
             justifyContent:"center",
             marginTop:"-10%",
             display:"flex",
             flexWrap:"wrap"
          
          }}>
            <div className='combox'>
              <img src={img1} width="100%" height="100%"/>
            </div>
            <div className='combox'>
              <img src={img2} width="100%" height="100%"/>

            </div>
            <div className='combox'>

              <img src={img3} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img4} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img5} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img6} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img7} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img8} width="100%" height="100%"/>
            </div>
            <div className='combox'>

              <img src={img9} width="100%" height="100%"/>
            </div>
            <div className='combox'>
              <img src={img10} width="100%" height="100%"/>

            </div>
            <div className='combox'>
              <img src={img11} width="100%" height="100%"/>

            </div>
            <div className='combox'>
              <img src={img12} width="100%" height="100%"/>

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




  const backgroundColors = ['#e8e8e8', '#e8e8e8', '#e8e8e8'];

const Company = () => {
    return (
        <div className='ccc' id='jobSection2'>
          <h1 style={{ fontFamily:"Verdana, Geneva, Tahoma, sans-serif",backgroundImage:"linear-gradient(#e6e6e6,#e8e8e8)",fontSize:"45px",padding:".5cm",marginBottom:"-.3cm",textAlign:"center",
    textShadow:"4px 4px 8px rgb(71, 78, 90)"}}>Top Companies Hiring</h1>
          <Slideshow colors={backgroundColors} interval={5000} />
        </div>
      );
}

export default Company;