import React from 'react'
import "./job.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Jobslide from './Jobslide';
import Remotejob from './Remotejob';

const Job = () => {
  return (
    <div style={{marginTop:"-2.5cm",position:"relative"}} id="jobSection" >
      <h1 className='jobsector' style={{backgroundImage:"linear-gradient(#e6e6e6,#e8e8e8)",fontSize:"45px",marginTop:"-13px",padding:".5cm",marginBottom:"-.3cm",
    textShadow:"4px 4px 8px rgb(71, 78, 90)"}}>Job sectors</h1><br/><br/><br/><br/>
        <div className='job' style={{fontFamily:"sans-serif",marginTop:"-2.3cm"}} >
       <div className='jobbox' style={{marginLeft:"3.5cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <HomeIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm"}} >Remote</h1>
         &nbsp;&nbsp;<ArrowForwardIosIcon/>
        </div>
       </div>
       <div className='jobbox' >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <ApartmentIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm"}} >MNC</h1>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <SchoolIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%" ,padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm"}} >Fresher</h1>
         &nbsp;&nbsp;<ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <LocalShippingIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm"}} >Supply </h1>
         &nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <TroubleshootIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm"}} >Analytics</h1>
         <ArrowForwardIosIcon />
        </div>
       </div>
       <div className='second' style={{display:"flex", marginTop:"4cm"}}>
       <div className='jobbox' style={{marginLeft:"6.5cm", marginTop:"-3cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <WorkspacePremiumIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm"}} >Fortune</h1>
         &nbsp;<ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <EqualizerIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-.3cm"}} >Data Science</h1>
         <ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <LocalMallIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"0cm"}} >Sales</h1>
        &nbsp; &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       </div>
       <div className='third' style={{display:"flex", marginLeft:"8cm",marginTop:"2.5cm"}}>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       </div>
       
       {/* <div className='forth' style={{display:"flex", marginLeft:"11.7cm",marginTop:"2.3cm"}}>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       <div className='jobbox' style={{ marginTop:"-3cm",marginLeft:"1.7cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       
       </div>
       <div className='five'>
       <div className='jobbox' style={{ marginTop:"1.5cm",marginLeft:"-8.4cm"}} >
        <div style={{display:"flex" ,marginTop:".4cm",marginLeft:".2cm"}}>
        <AccountBalanceIcon style={{fontSize:".9cm", backgroundColor:"rgb(184, 218, 220,0.5)",borderRadius:"50%",padding:"4px 4px 4px 4px",marginTop:"-.15cm"}}/>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px" ,marginLeft:".3cm",marginTop:"-0cm"}} >Banking</h1>
        &nbsp; &nbsp; <ArrowForwardIosIcon />
        </div>
       </div>
       </div> */}
       <Jobslide/>
       {/* <Remotejob/> */}
       </div>
      </div>
    
  )
}
export default Job