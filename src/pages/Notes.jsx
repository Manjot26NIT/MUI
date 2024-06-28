import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import TodoCard from '../components/TodoCard';
import { useSelector } from 'react-redux';

function Notes() {
  const notes = useSelector((state) => state.todos);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mx: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {notes.map((todo) => (
          <Box
            key={todo.id} // Ensure each child has a unique key
            maxWidth={370}
            sx={{  my: '1rem', boxShadow: 1, display: 'flex' }}
          >
            <TodoCard todo={todo} />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Notes;
