import React from 'react'
import { Button, Grid, TextField } from '@mui/material';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import Radio from '@mui/material/Radio';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./signup.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const theme = createTheme();

const SignUp = ({ onFlipBackToLogin }) => {
  

  const handleFlipBackToLoginClick = () => {
    onFlipBackToLogin();
  };
  return (
    <div >
    <div className='mmm'>
      <ThemeProvider theme={theme} >
     
      <div className='main' >
      </div>
        <div className='form'id='bx' style={{height:"16cm"}}>
      <Container className='container' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{display:"flex"}}>
         {/* <Avatar sx={{ m: 1, bgcolor:'secondary.main' }} style={{fontSize:"2cm"}}/> */}
          {/* <Typography component="h1" variant="h5" style={{fontSize:"29px"}}> */}
          <div style={{display:"flex",paddingTop:".5cm"}}>
          <AccountCircleIcon style={{fontSize:"2cm"}}/>
            <h1 className='s'>&nbsp;Sign up</h1></div>
          {/* </Typography> */}
          </div>
          <Box component="form" noValidate  sx={{ mt: 3 }} >
          <form id='signup-form'style={{marginLeft:".5cm"}} >
            <Grid container spacing={2} >
              <Grid item xs={12}>
                    <TextField
                      style={{marginLeft:"-1cm",width:"12.5cm"}}
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                    InputLabelProps={{ 
                      style: {
                        fontFamily: 'cursive', 
                        color:'black',
                        fontSize:'17px'
                      },
                    }}
                      required
                      fullWidth
                      name="Full Name"
                      label="Full Name"
                      type="text"
                    />
                    </Grid>
              <Grid item xs={12}>
                    <TextField
                      style={{marginLeft:"-1cm",width:"12.5cm"}}
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                    InputLabelProps={{ 
                      style: {
                        fontFamily: 'cursive', 
                        color:'black',
                        fontSize:'17px'
                      },
                    }}
                      required
                      fullWidth
                      name="Qualification"
                      label="Qualification"
                      type="text"
                    />
                    </Grid>
                    <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive', 
                    color:'black',
                    fontSize:'17px'
                  },
                }}
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  // onChange={ (e) => setEmail(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive', 
                    color:'black',
                        fontSize:'17px'
                  },
                }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  // onChange={ (e) => setPassword(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                    
                  },
                  
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive', 
                    color:'black',
                        fontSize:'17px'
                  },
                }}
                  required
                  fullWidth
                  name="conform password"
                  label="Confirm Password"
                  type="password"
                  // onChange={ (e) => setCPassword(e.target.value)}
                  />
              </Grid>

                  <Grid item xs={12}>
                    <TextField
                     style={{marginLeft:"-1cm",width:"12.5cm"}}
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                    InputLabelProps={{ 
                      style: {
                        fontFamily: 'cursive', 
                        color:'black',
                        fontSize:'17px'
                      },
                    }}
                      required
                      fullWidth
                      name="Mobile Number"
                      label="Mobile Number"
                      type="text"
                      // onChange={ (e) => setDOB(e.target.value)}
                    />
                    </Grid>
                     <Select defaultValue={0} id="named-select" name="demo-select" style={{background:"transpatent"}} required> 
                  <Option className="op" value={0} style={{display:"none"}}>Select the Below Job Function*</Option>
                  <Option className="op" value={20}>Accounting/Tax/Company Secretary/Audit</Option>
                  <Option className="op" value={30}>Finance and Insurance</Option>
                  <Option className="op" value={40}>IT Hardware - Control</Option>
                  <Option className="op" value={50}>IT Hardware - Networking</Option>
                  <Option className="op" value={60}>IT Software - Client Server</Option>
                  <Option className="op" value={70}>IT Software - Middleware</Option>
                  <Option className="op" value={80}>Top Management</Option>
                  <Option className="op" value={90}>Entertainment & Media</Option>
                </Select>
                <ArrowDropDownIcon style={{position:"relative",marginTop:"-1.2cm",marginLeft:"10.5cm",fontSize:".9cm"}}/>
                     <Select defaultValue={0} id="named-select" name="demo-select" style={{background:"transpatent"}} required>
                  <Option className="op" style={{display:"none"}} value={0}>Experience*</Option>
                  <Option className="op" value={"Fresher"}>Fresher</Option>
                  <Option className="op" value={20}>1 Year</Option>
                  <Option className="op" value={30}>2 Year</Option>
                  <Option className="op" value={40}>3 Year</Option>
                  <Option className="op" value={50}>4 Year</Option>
                  <Option className="op" value={60}>5 Year & above</Option>
                </Select>
      <ArrowDropDownIcon style={{position:"relative",marginTop:"-1.2cm",marginLeft:"10.5cm",fontSize:".9cm"}}/>
                    
                           <label className='error' style={{color:"red",fontSize:"20px"}}></label>
                           <FormControl id="radio-buttons" required>
      <FormLabel  style={{fontFamily:"cursive",fontSize:"17px",color:"black"}}>&nbsp;&nbsp;Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style={{textAlign:"center"}}
        
      >
        <FormControlLabel style={{paddingRight:".5cm",marginLeft:"1.3cm"}} label={<span style={{fontFamily:"cursive",fontSize:"20px",color:"black"}}>Male</span>} control={<Radio /> } value="Male" />
        <FormControlLabel style={{paddingRight:".5cm"}} value="Female" control={<Radio />} label={<span style={{fontFamily:"cursive",fontSize:"20px",color:"black"}}>Female</span>}/>
        <FormControlLabel style={{paddingRight:".5cm"}} value="Other" control={<Radio />} label={<span style={{fontFamily:"cursive",fontSize:"20px",color:"black"}}>Others</span>} />
      </RadioGroup>
    </FormControl>
                     <Select defaultValue={0} id="named-select" name="demo-select" style={{background:"transpatent"}} required>
                  <Option className="op" style={{display:"none"}} value={0}>Current Work Location</Option>
                  <Option className="op" value={"Ahmedabad"}> Ahmedabad</Option>
                  <Option className="op" value={"Bengalore"}>Bengalore</Option>
                  <Option className="op" value={"Chennai"}>Chennai</Option>
                  <Option className="op" value={"Coimbatore"}>Coimbatore</Option>
                  <Option className="op" value="Delhi">Delhi</Option>
                  <Option className="op" value="Hyderabad">Hyderabad</Option>
                  <Option className="op" value="Kolkata">Kolkata</Option>
                  <Option className="op" value="Mumbai">Mumbai</Option>
                  <Option className="op" value="Pune">Pune</Option>
                </Select>
                <ArrowDropDownIcon style={{position:"relative",marginTop:"-1.2cm",marginLeft:"10.5cm",fontSize:".9cm"}}/>
              <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive',
                    color:'black',
                        fontSize:'17px' 
                  },
                }}
                  required
                  fullWidth
                  name="Key Skills"
                  label="Key Skills"
                  type="text"
                  // onChange={ (e) => setPhNo(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                
                 style={{marginLeft:"-1cm"}}
                  control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                  label={<span style={{fontFamily:"cursive",fontSize:"17px",color:"blue"}}>Accept Terms and Conditions.</span>}
                   />
              </Grid>
            </Grid>
            <Button type="submit"
             style={{marginLeft:"-1cm",width:"12.5cm",fontFamily:"cursive",fontSize:"20px",fontWeight:"1000"}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
              // onClick={SubmitHandler}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
                </form>
              <Link to="/flip">  <button  onClick={handleFlipBackToLoginClick} style={{marginLeft:"6cm"}}>Already have an account? Login</button></Link>
                {/* </Grid> */}
                </Box>
                </Box>
                </Container>
                </div>
                </ThemeProvider>
    
    </div>
    </div>
  )
}

export default SignUp