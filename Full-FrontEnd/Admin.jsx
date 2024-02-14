import React from 'react'
import "./admin.css"
import pic from "./pic2.jpg"
const Admin = () => {
  return (
    <div class="wrapper">
    <div class="section">
 <div class="top_navbar">
   <div class="hamburgerr">
     
       {/* <button><MenuIcon /> </button>   */}
   </div>
 </div>
 <div class="containerr">
  {/* <Showtable/> */}
 </div>
</div>
     <div class="sidebarad">
         <div class="profilee">
             <img src={pic} alt="profile_picture"/>
             <h3 style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>LOGAN</h3>
             <p style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Admin</p>
         </div>
         <ul style={{alignItems:"center",justifyContent:"center"}}>
             <li>
                 <a href="#" class="active" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-home"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Home</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-desktop"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Dashboard</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-user-friends"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>People</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Perfomance</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-database"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Development</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-chart-line"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Reports</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-user-shield"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Others</span>
                 </a>
             </li>
             <li>
                 <a href="#" style={{textDecoration:"none"}}>
                     <span class="icon"><i class="fas fa-cog"></i></span>
                     <span class="item" style={{fontFamily:"'Open Sans', sans-serif",boxSizing:"border-box"}}>Settings</span>
                 </a>
             </li>
         </ul>
     </div>
     
 </div>
  )
}

export default Admin