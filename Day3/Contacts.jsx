import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import './contact.css'
import pic1 from './wall1.jpg'
import pic2 from './wall2.jpg'
import pic3 from './wall3.jpg'
import pic4 from './wall4.jpg'
import pic5 from './wall5.jpg'
import pic6 from './wall6.jpg'
import pic7 from './wall7.jpg'
import pic8 from './wall8.jpg'
const Contacts = () => {
  return (
    <div>
        <div className='top'>
            <p className='con'>Contact</p>
            <CloseIcon className='ion'style={{fontSize:"50px"}}/>
            </div>
            <div className='mid'>
                <div className='slideimg'>
                <div id="slideshow1">
<div class="slide-wrapper1">
<div class="slide1">
        <h1 class="slide-number1">
            <img src={pic1} width={"120%"} style={{marginLeft:"-1.6cm"}}/>
        </h1>
</div>
    <div class="slide1">
        <h1 class="slide-number1">
            <img src={pic2} width="120%" heigth="25cm" />
        </h1>
</div>
    <div class="slide1">
        <h1 class="slide-number1">
            <img src={pic3} width="120%" heigth="22cm"/>
        </h1>
</div>
    <div class="slide1">
        <h1 class="slide-number">
            <img src={pic4} width="120%" heigth="22cm"/>
        </h1>
</div>
    <div class="slide1">
        <h1 class="slide-number1">
            <img src={pic5} width="120%" heigth="22cm"/>
        </h1>
</div>
    <div class="slide1">
        <h5 class="slide-number1">
            <img src={pic6} width="120%" heigth="22cm"/>
        </h5>
</div>
    <div class="slide1">
        <h5 class="slide-number1">
            <img src={pic7} width="120%" heigth="22cm"/>
        </h5>
</div>
    <div class="slide1">
        <h5 class="slide-number1">
            <img src={pic8} width="120%" heigth="22cm"/>
        </h5>
</div>
</div>
</div>
                </div>
                    {/* <form> */}
                <div className='mess'>
                    <div className='chead'>
                    <MailOutlineIcon className='messicon' style={{fontSize:"60px"}}/>
                <p className='messp'>Leave A Message.</p></div>
                <div className='add'><PlaceIcon className='addicon' style={{fontSize:"40px"}}/>< p className='addtxt'style={{
    fontFamily: "'Times New Roman', Times, serif" ,fontSize:"30px" 
}}>Address</p><br/>
                <p className='giveadd' style={{fontSize:"20px"}}>Sri Krishna College of Engineering And Technology<br/>Kuniamuthur,Coimbatore-641008</p></div>
                </div>
                <div className='maill'><TelegramIcon style={{fontSize:"30px"}}/>< p className='addtxt'>Email Address</p>
                 <p className='giveadd2'>727721euit071@skcet.ac.in</p></div>
                <div className='calll'>< LocalPhoneIcon style={{fontSize:"30px"}}/>< p className='addtxt'>Contact Number</p><br/>
                <p className='giveadd3'>+91 8270846243</p></div>
                {/* <div style={{marginLeft:"-1cm"}}> */}
                <div className='two'>
                <div className='name'><p className='namee'style={{
    fontFamily: "'Times New Roman', Times, serif" ,fontSize:"23px" 
}} >Name</p><input className="namein"type='text' placeholder='Karthi*****' style={{
                    width:"6.5cm",
                    height:"1.2cm"
                }}/></div>
                <div className='name' style={{marginLeft:"-.5cm"}}><p className='namee'style={{
    fontFamily: "'Times New Roman', Times, serif" ,fontSize:"23px" 
}}>Email</p><input className="namein"type='email' style={{
                    width:"6.8cm",
                    height:"1.2cm"
                }}placeholder='karthi123@...'/></div>
                </div>
                <div className='one'>
                <div className='name'><p className='namee'style={{
    fontFamily: "'Times New Roman', Times, serif" ,fontSize:"25px" 
}}>Subject</p><input className="subin"type='text' placeholder='Subject'/></div>
                </div>
                <div className='three'>
                <div className='name'><p className='namee'style={{
    fontFamily: "'Times New Roman', Times, serif" ,fontSize:"25px" 
}}>Contant</p><input className="messin"type='text' placeholder='Subject'/></div>
        
                </div>
                <div className='send'><SendIcon className='sendi' style={{fontSize:"50px"}} /></div>
                {/* </form> */}
                {/* </div> */}
            </div>
    </div>
  )
}

export default Contacts