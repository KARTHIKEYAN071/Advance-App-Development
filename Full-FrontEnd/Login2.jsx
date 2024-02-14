import React, { useState,Component } from 'react';
import "./Login2.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';
const Login2 = ({ isFlipped, onSignUpClick }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    localStorage.setItem("type",newValue)
    // alert(`Selected value: ${newValue}`);
  };
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    onSignUpClick();
  };
  const valid = () => {
  const name=document.getElementById("idInput").value;
  const pass=document.getElementById("nameInput").value;
  const type=localStorage.getItem("type")
  if(type==='Admin')
  {
    navigate('/admin', { replace: true });
  }
  
}
  return (
    <div>
    <div id='bodylog'>
    <div className='loginback'></div>
    <div className='check'>
    <div className='pic'>
          <br/>
         <div id='result' class="temp"> <h1 className='loginhere'>LOGIN HERE</h1></div>
          
          <div className='lab'>
            <input type="email"  placeholder='Enter Email' id="idInput"   required/>
          </div>
          <div style={{display:"none"}}>
          
          </div>
          
          <div className='lab'>
            <input type="password" placeholder='Enter Password' id="nameInput" required/>
          </div>
         <br/>
         <div className=''> <h2 className='h2' >LOGIN AS</h2></div><br/>
          <div className='check'>
          <div className='stf'>
          <input type='radio'value='Admin' className='null' id='user'name='box' 
           checked={selectedValue === 'Admin'}
           onChange={handleRadioChange} /><label for='staff'style={{color:"white"}}>Admin</label>
          </div>
          <div className='std'>
          <input type='radio'value='User' className='null' id='user' name='box' 
           checked={selectedValue === 'User'}
           onChange={handleRadioChange}/><label for='std' style={{color:"white"}}>User</label>
          </div>
          
          </div>
          
          <div className='btn'>
            {/* <Link to="/Login"> */}
             {/* <Link to='/afterlogin'style={{textDecoration:"none"}}> */}
             <button onClick={valid}><b>LOGIN</b></button>
               {/* </Link> */}
              {/* </Link> */}
          </div>
        <p className='link'>New user? /<button  onClick={handleSignUpClick}>Sign Up</button><br/></p>
        <div className='icon'>
      <GoogleIcon  style={{color:"#34A853"}}/></div>
        <div className='icon'>
     <FacebookIcon style={{color:"#316FF6"}}/></div>
        <div className='icon'>
     <InstagramIcon style={{color:"rgb(233, 79, 104)"}}/></div>
        <div className='icon'>
    <XIcon style={{color:"black"}}/></div>
        <div className='icon'>
  <LinkedInIcon style={{color:"#316FF6"}}/></div>
  
  </div>

          
          </div>
    </div>
    </div>
  
    

  )
}

export default Login2;
