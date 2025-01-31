import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    navBack: {
      backgroundImage:'linear-gradient(90deg, rgba(247,244,243,1) 0%, rgba(6,197,250,1) 62%, rgba(0,166,255,1) 100%);',
      position: 'sticky !important',
    },
    Tabs: {
      '& div.MuiTabs-scroller .MuiButtonBase-root':{
          color: '#1976d2 !important',
      },
      '& div.MuiTabs-scroller .MuiButtonBase-root.Mui-selected': {
          color: '#1976d2 !important',
          fontWeight: 'bold !important',
      },      
    },
    logo: {
      color: '#1976d2',
      fontSize: '25px !important',
      fontWeight: 'bold !important',
    },
    navItemGrid:{
       alignItems: 'center',
    },
    loginBox: {
      display: 'flex',
      '& button.MuiButtonBase-root:first-child': {
          marginLeft: 'auto',
      },
      '& button.MuiButtonBase-root': {
          marginLeft: 10,
          backgroundColor: 'white',
          color: '#1976d2',
      }
    },
     drawer: {      
        '& div.MuiPaper-root': {
                backgroundImage:'linear-gradient( rgba(247,244,243,1) 0%, rgba(6,197,250,1) 62%, rgba(0,166,255,1) 100%);',
                width: 300,
            }
        },
        drawerList: {
            '& li span.MuiTypography-root': {
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#1976d2',
            },
            '& li .MuiListItemButton-root:hover': {
                  backgroundColor: "#1976d2",
                    
                '& span.MuiTypography-root': {
                   color: 'white !important',
                },
            }

    },
    iconBtn: {
        marginLeft: 'auto !important',
        '& svg.MuiSvgIcon-root': {
            fill: 'white',
        }
    }
    
  });

export default useStyle

