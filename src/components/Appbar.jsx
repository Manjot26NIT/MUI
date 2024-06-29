import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';





export default function ButtonAppBar() {
    const navigate=useNavigate();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(2);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
<>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Rate this Google Notes App"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Rating
  name="simple-controlled"
  value={value}
  precision={0.5}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Later</Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    
    <Box sx={{ flexGrow: 1000  }}>
      <AppBar color="secondary" position="static" sx={{borderRadius:5 , boxShadow: 3 }}>
        <Toolbar  >
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Google Notes
          </Typography>
          <IconButton href='https://github.com/Manjot26NIT' >
            <GitHubIcon   />
          </IconButton>
          <Button color="inherit"  onClick={handleClickOpen} >Rate me</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
