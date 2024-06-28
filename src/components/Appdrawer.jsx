import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
function Appdrawer() {

    const [selected, setSelected] = React.useState(false);
    const handleClick = () => {
        if(e){
        setSelected(true);}
    }
    const navigate = useNavigate(); 
const drawerWidth = 240;
  return (
  
        <>  
        
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
            <Typography variant='h6' fontFamily={'monospace'} >
            Dashboard
            </Typography>
        </Toolbar>
        <Divider />
        <Box>
        <List>
   
            <ListItem key={12} disablePadding>
              <ListItemButton   onClick={() => navigate('/')}  sx={{
      '&:active': {
        // Change the background color on hover
        color: 'purple', // Optional: Change the text color on hover to white for better readability
      },
    }} >
                <ListItemIcon>
                   <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Inbox"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={56} disablePadding>
                
              <ListItemButton onClick={()=>navigate('/create')} sx={{
      '&:hover': {
        // Change the background color on hover
        color: 'purple', // Optional: Change the text color on hover to white for better readability
      },
    }} >
                <ListItemIcon>
                   <CreateIcon />
                </ListItemIcon>
                <ListItemText primary={"Create"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={78} disablePadding>
            <ListItemButton  sx={{
      '&:active': {
        // Change the background color on hover
        color: 'purple', // Optional: Change the text color on hover to white for better readability
      },
      
    }}>
                <ListItemIcon>
                   <DeleteIcon/>
                </ListItemIcon>
                <ListItemText primary={"Delete"} />
              </ListItemButton>
            </ListItem>
     
        </List>
        </Box>
        <Divider />
       
      </Drawer>
        </>
  )
}

export default Appdrawer