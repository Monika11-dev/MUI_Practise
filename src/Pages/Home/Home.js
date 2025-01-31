import { Container, Box, Typography } from '@mui/material'
import useStyle from './Homestyle'
import React from 'react'
import heroImage from '../../Images/MUI_project_test_4.png';

const Home = () => {
  const classes = useStyle();
  return (
    <div>    
            <Box component="section">
                <Container maxWidth='xl'>
                  <Box className={classes.heroDiv}>
                    <Box className={classes.textDiv}>
                      <Typography variant="h1">Multimedia Courses</Typography>
                      <Typography >Scope and Career opportunities</Typography>
                      <Typography >Career opportunities</Typography>
                     
                    </Box>
                    <Box className={classes.textDiv}>
                      <img src={heroImage} alt='hero-image'/>
                    </Box>
                  </Box>
                </Container>
            </Box>       
    </div>
  )
}

export default Home