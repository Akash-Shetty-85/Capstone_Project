import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'
const Header = ({hasHiddenAuthButtons}) => {
  const history = useNavigate();


  if(hasHiddenAuthButtons)
  {
    return (
       <Box className="header">
         {/* <Box className="header-title">
             <img src="logo_light.svg" alt="QKart-icon"></img>
         </Box> */}
         <Button
           className="explore-button"
           startIcon={<ArrowBackIcon />}
           variant="text"
           onClick = {()=> history("/")}
         >
           BACK TO EXPLORE
         </Button>
       </Box>
     )};

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <ShoppingBasketIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              upGrad Eshop
              </Typography>
              
              <Button color="inherit" onClick={() => history('/signin')} >Login</Button>
              <Button color="primary" variant="contained" onClick={() => history('/signup')}>Register</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Header