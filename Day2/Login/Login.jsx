import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='bodyy' style={{position:"fixed",backgroundColor:"gray",width:"100%"}}>
<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Login Here</h1><br/>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<div style={{display:"flex"}} className='radio'> 
			<input type="radio"  name="user" className='user' placeholder="Password" /><label> User</label>
			<input type="radio" name="user" className='user' placeholder="Password" /><label> Admin</label>
			</div>
			<a href="#">Forgot your password?</a>
			<button>Login</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div id="mov" class="overlay-panel overlay-right">
				<h1>Hello, Friend..!</h1>
				<p>Enter your personal details and start journey with us</p>
				<Link to="/Signup"><button class="ghost" id="signUp">Sign Up</button></Link>
			</div>
		</div>
	</div>
</div>


    </div>
  )
}

export default Login