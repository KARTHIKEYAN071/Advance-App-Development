import React from 'react'
import "./nav.css"
import leo from "./leo.png"
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import Slidebar from '../Slidebar/Slidebar';
import Job from '../Job/Job';
const Nav = () => {

  const scrollToJob = () => {
    const jobSection = document.getElementById('jobSection');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToJob0 = () => {
    const jobSection0 = document.getElementById('jobSection0');
    if (jobSection0) {
      jobSection0.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToJob2 = () => {
    const jobSection2 = document.getElementById('jobSection2');
    if (jobSection2) {
      jobSection2.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToJob3 = () => {
    const jobSection3 = document.getElementById('jobSection3');
    if (jobSection3) {
      jobSection3.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    
    <div className='header'>
           
                <div className='leo'>
                <img src={leo} alt="Leo" width="160" height="160" style={{marginTop:"-20px",position:"relative",marginLeft:"-.5cm"}}/>
                </div>
                <div className='tele' ><TelegramIcon/></div>
                <p className='mail'>Email</p><br/><br/><p className='email'>727721euit071@skcet.ac.in</p>
                <div className='callicon'><CallIcon/></div>
                <p className='call'>Call</p><br/><br/><p className='num'>+91 8270846243</p>
                <div className="navigation">
                    <ul>
                        
                       <button onClick={scrollToJob0}> <li className='li' style={{TextDecoration:"none"}}>HOME</li></button>
                       <button onClick={scrollToJob}> <li className='li'>JOBS</li></button>
                       <button onClick={scrollToJob2}><li className='li'>COMPANIES</li></button>
                       <button   onClick={scrollToJob3}><li className='li'>SERVICES</li></button>
                       <Link to="/About" style={{textDecoration:"none"}}>  <button><li className='li'>ABOUT</li></button></Link>
                     <Link to="/Contact" style={{textDecoration:"none"}}>  <button> <li className='li'>CONTACT</li></button></Link>
                    </ul>
                </div>
                <div class="searchbar">
                    <input className="srchin" type="search" name="search" placeholder="search here..."/>
                    <button className="srchbtn">Search</button>
                    </div>
                    <Link to="/Login" style={{textDecoration:"none"}}><div className='loginbtn'> <div className='lock'><AccountCircleOutlinedIcon style={{color:"wheat",fontSize:"30px"}}/>
                    </div><button style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>LOGIN</button></div></Link>
                    
                    <Slidebar />
                    
                </div>
  )
}

export default Nav