import { useState ,useEffect} from 'react';
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import { FormControl, FormLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { addtitle } from '../features/todoslice';

function Create() {
  
  const todos=useSelector(state=>state.todos);
  useEffect(() => {console.log(todos)}, [todos])
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [type, setType] = useState('money');
  const dispatch=useDispatch();
  const handle = (e) => {
    e.preventDefault();
    setDetailsError(false);
    setTitleError(false);
    dispatch(addtitle({title:title,detail:details,type:type}));
    
    if(title === '') {
      setTitleError(true);
    }
    if(details === '') {
      setDetailsError(true);
    }
    if (title && details) {
     
      setDetails('');
      setTitle('');
      
     
    }
    
  }
  return (
    <div>
    <Typography variant='h4' component="h2" gutterBottom sx={{ color: 'primary.main' }} >
        Create a new note
    </Typography>
    <form noValidate onSubmit={handle} action="">
    <TextField 
    helperText={titleError ? 'Title is required' : ''}
    error={titleError}
    value={title}
    sx={{mb: 2}}
    variant='outlined'
    fullWidth
    label='Note Title'
    required
    color='secondary'
    onChange={(e) => setTitle(e.target.value)}
    />
    <TextField 
    helperText={detailsError ? 'Details are required' : ''}
    error={detailsError}
    value={details}
    onChange={(e) => setDetails(e.target.value)}
    sx={{mb: 2}}
    variant='outlined'
    fullWidth
    multiline
    rows={4}
    label='Details'
    required
    color='secondary'
    />

<FormControl fullWidth sx={{mb:1,mt:2,ml:2}}>
  <RadioGroup value={type}  onChange={(e)=>setType(e.target.value)}>  
  <FormLabel color='primary' sx={{ fontSize: '20px', fontFamily: 'Arial' ,color:"primary.main"}}>
      Type
    </FormLabel>
    
  <FormControlLabel value="money" control={<Radio />} label="Money" />
  <FormControlLabel value="todo" control={<Radio />} label="To-Do" />
  <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
  <FormControlLabel value="work" control={<Radio />} label="Work" />
  <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>   

   
<Button  size="large" type="submit" variant='contained' color='primary' endIcon={<KeyboardArrowRightIcon fontSize='large'/>}>
    Submit
</Button>
</form>

    </div>
  )
}

export default Create