import React from 'react';
import './admin.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import Showtable from '../Showtable/Showtable';
// import HomeIcon from '@mui/icons-material/Home';

function Adminlogin() {
//   if (window.location.pathname === '/adminLogin')
//   {
//   window.location.onload = ()=>{
//   var hamburgerr = document.querySelector(".hamburgerr");
// 	hamburgerr.addEventListener("click", function(){
// 		document.querySelector(".body").classList.toggle("active");
// 	})
// }
// }
  return (
    
    <div class="wrapper">
    <div class="section">
 <div class="top_navbar">
   <div class="hamburgerr">
     
       {/* <button><MenuIcon /> </button>   */}
   </div>
 </div>
 <div class="containerr">
  <Showtable/>
 </div>
</div>
     <div class="sidebarad">
         <div class="profilee">
             <img src="https://cdn.fansshare.com/image/hughjackman/hugh-jackman-pictures-hd-wallpapers-wallpaper-691803190.jpg" alt="profile_picture"/>
             <h3>LOGAN</h3>
             <p>Admin</p>
         </div>
         <ul>
             <li>
                 <a href="#" class="active">
                     <span class="icon"><i class="fas fa-home"></i></span>
                     <span class="item">Home</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-desktop"></i></span>
                     <span class="item">My Dashboard</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-user-friends"></i></span>
                     <span class="item">People</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                     <span class="item">Perfomance</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-database"></i></span>
                     <span class="item">Development</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-chart-line"></i></span>
                     <span class="item">Reports</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-user-shield"></i></span>
                     <span class="item">Admin</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-cog"></i></span>
                     <span class="item">Settings</span>
                 </a>
             </li>
         </ul>
     </div>
     
 </div>
 
  );
}

export default Adminlogin;