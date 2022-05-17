import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import cryptoJs from 'crypto-js';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import "./drawer.css"
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const navigate=useNavigate();
  const { window } = props;
  const [data, setdata] = React.useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  var sinout=data?
  {nav:'/si',text:'SIgn IN',icon:''}:{nav:'/so',text:'SIgn out',icon:''};

 let listitems=[
  {nav:'/people',text:'All People',icon:''},
  {nav:'/Blogs',text:'Home',icon:''},
  {nav:'/create',text:'Publish',icon:''},
  {nav:'/myprofile',text:'My Profile',icon:''},



 


 ]
let x=['l','k'];
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};
const handlesignout=()=>{
  navigate("/")
  localStorage.clear();
}

  const drawer = (
    <div>
      <Toolbar />

      <List>
        {listitems.map((e, index) => (
          <>
          <ListItem key={e.text} disablePadding onClick={()=>{
navigate(e.nav)
          }}>
          
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItemButton>
          </ListItem>
          
          </>

        ))}
        <ListItem key='so' disablePadding onClick={()=>{
          handlesignout()
                      }}>
                      
                        <ListItemButton>
                          <ListItemIcon>
                          </ListItemIcon>
                          <ListItemText primary="SignOut" />
                        </ListItemButton>
                      </ListItem>
      </List>
    </div>
  );
var userdata=false;
var CryptoJS=require("crypto-js");
  useEffect(()=>{
 
   
  
    },[])




  const container = window !== undefined ? () => window().document.body : undefined;
return (<>
 <CssBaseline />

  <div className='Appbar' >
  <span className='tbtn' onClick={handleDrawerToggle} ><MenuIcon/> </span>
  <span style={{marginTop:'10px'}}> 
    
    <a href="/blogs">
    <img src='favicon.ico' height={30}/>
    </a>
  </span>
  <div className='links' >
    {listitems.map((e,id)=>{
    return   (<a href={e.nav} key={id}>
       {e.text}
      </a>
    )})
  
    }
    <a href="/" onClick={()=>handlesignout() }>Sign Out</a>
  
  

  </div>
 
  </div>

 <Box
        component="div"
        sx={{ width: { sm: 0 ,xs :0}, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
  
    
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
       {/* <Outlet/> */}
      </Box></>)
  
}



export default ResponsiveDrawer;
