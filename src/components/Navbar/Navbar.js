import React,{useState} from 'react';
import {AppBar, Grid, Toolbar,Tabs,Tab, Typography,Box, Button,useTheme,useMediaQuery} from '@mui/material';
import { Link } from 'react-router-dom';
import useStyle from './Nav.style';
import DrawerComp from './DrawerComp';

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [activeLink, setActiveLink] = useState(0);
  const classes = useStyle();
  const handleLink = (e,value) => {
    console.log(value);
     setActiveLink(value);
  }
  return (
    <div>
        <AppBar className={classes.navBack}>
            <Toolbar>
                {isMatch ? 
                (<>
                <Typography className={classes.logo}>Logo</Typography>    
                <DrawerComp />
                </>) :
                ( <Grid container className={classes.navItemGrid}>
                    <Grid item xs={2}>
                        <Typography className={classes.logo}>Logo</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Tabs  value={activeLink} indicatorColor='primary' onChange={handleLink} className={classes.Tabs}>
                            <Tab LinkComponent={Link} to='/' label = "Home" />  
                            <Tab LinkComponent={Link} to='/Products' label = "Products" />   
                            <Tab LinkComponent={Link} to='/Contact' label = "Contact" />    
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <Box className={classes.loginBox}>
                            <Button variant='contained'>Login</Button>
                            <Button variant='contained'>Signup</Button>
                        </Box>                 
                    </Grid>                  
                </Grid>
                )}
            </Toolbar>
            
        </AppBar>
        
    </div>
  )
}

export default Navbar;