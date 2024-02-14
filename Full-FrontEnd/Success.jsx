import React from 'react'
import "./success.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddJobs from '../Addjob/Addjob';
const Success = ({ onAddAgain,Str }) => {
  const handleClick = () => {
    if (onAddAgain) {
      onAddAgain();
    }
  };
 
  return (
    <div className='sbox'>
        <CheckCircleIcon style={{color:"rgb(50, 255, 47)",fontSize:"3.5cm",marginLeft:"37%",marginTop:"-1.7cm"}}/>
        {/* <h1 style={{textAlign:'center',fontFamily:"sans-serif",fontSize:"50px"}}>Awesome!</h1> */}<br/>
        <h1 style={{textAlign:'center',fontFamily:"sans-serif",fontSize:"32px"}}>{Str} Added Successfully !</h1>
        {/* <h1 style={{textAlign:'center',fontFamily:"sans-serif",fontSize:"50px"}}>Awesome!</h1> */}<br/>
        <button className='sbut' onClick={handleClick}>Add Again</button>
    </div>
  )
}

export default Success