import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import TodoCard from '../components/TodoCard';
import { useSelector } from 'react-redux';

function Notes() {
  const notes = useSelector((state) => state.todos);

  return (
    <>
     <Grid
  container
  spacing={2} // Adjust the spacing between grid items
  sx={{
    mx: '1rem', // Margin on the x-axis for the grid container
  }}
>
  {notes.map((todo) => (
    <Grid
      item
      key={todo.id} // Ensure each child has a unique key
      xs={12} sm={6} md={4} lg={2.8} // Adjust the sizes as needed for responsiveness
    >
      <Box
        sx={{ my: '1rem', boxShadow: 1, display: 'flex' }}
        maxWidth={370} // You might want to adjust or remove this depending on your layout needs
      >
        <TodoCard todo={todo} />
      </Box>
    </Grid>
  ))}
</Grid>
    </>

    
  );
}

export default Notes;
