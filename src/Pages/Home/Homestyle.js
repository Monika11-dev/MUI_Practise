import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    heroDiv: {
        display: 'flex',
        alignItems:'center',
        padding:'0px 50px',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column-reverse',    
          },
            
    },
    textDiv: {
        width: '50%',  
        '& img': {
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
        },
        '& h1.MuiTypography-h1': {
            color: '#1976d2',
            fontWeight: 'bold',
            fontSize: '70px',
            [theme.breakpoints.down('md')]:{
                 fontSize: '40px',
              },
        },
        '& p.MuiTypography-body1': {
            color: 'grey',
            fontSize: '20px !important',
            fontFamily: 'Lexend Giga',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
        [theme.breakpoints.down('sm')]:{
            width: '100%', 
            textAlign: 'center',   
          },
        
    },
}))

export default useStyle