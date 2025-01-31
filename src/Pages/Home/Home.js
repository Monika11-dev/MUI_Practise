import { Container, Box, Typography } from '@mui/material'
import useStyle from './Homestyle'
import React from 'react'
import heroImage from '../../Images/MUI_project_test_4.png';

const Home = () => {
  const classes = useStyle();
  return (
    <div>              
                <Container maxWidth='xl'>
                  <Box className={classes.heroDiv}>
                    <Box className={classes.textDiv}>
                      <Typography variant="h1">Development Courses</Typography>
                      <Typography >Scope and Career opportunities</Typography>
                      <Typography >With certification</Typography>
                     
                    </Box>
                    <Box className={classes.textDiv}>
                      <img src={heroImage} alt='hero-image'/>
                    </Box>
                  </Box>
                </Container>       
    </div>
  )
}

export default Home