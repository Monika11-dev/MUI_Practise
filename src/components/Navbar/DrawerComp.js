import React,{useState,useEffect} from 'react';
import { Drawer, IconButton, List, ListItemText, ListItem, ListItemButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyle from './Nav.style';
import { Link, useLocation} from 'react-router-dom';

const DrawerComp = () => {
  const classes = useStyle();
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();
  useEffect(()=>setDrawer(false),[location])
  const handleDrawer = () => {
    setDrawer(true);
  }
  const handleClose = () => {
    setDrawer(false);
  }
  return (
    <>
        <Drawer className={classes.drawer} anchor='right' open={drawer} onClose={handleClose}>
            <List className={classes.drawerList}>
                    <ListItem>
                    <ListItemButton LinkComponent={Link} to='/' onClose={handleClose}>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>               
                    </ListItem>  
                    <ListItem>
                    <ListItemButton LinkComponent={Link} to='/Products' onClose={handleClose}>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>               
                    </ListItem> 
                    <ListItem>
                    <ListItemButton LinkComponent={Link} to='/Contact' onClose={handleClose}>
                        <ListItemText>Contact</ListItemText>
                    </ListItemButton>               
                    </ListItem>    
                    <ListItem>           
                    </ListItem> 
            </List>
        </Drawer>
        <IconButton onClick={handleDrawer} className={classes.iconBtn}>
            <MenuIcon/>
        </IconButton>
    </>
  )
}

export default DrawerComp