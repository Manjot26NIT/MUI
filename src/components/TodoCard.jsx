import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Card as MuiCard, CardContent, CardActions, Typography, Button, CardHeader } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import {  removeTodo } from '../features/todoslice';
function TodoCard({ todo }) {
  const dispatch = useDispatch();
  return (
    <MuiCard  sx={{ Width: 250,flexGrow:'1' }}>
      <CardHeader
        action={
          <IconButton onClick={()=>dispatch(removeTodo(todo.id))} >
            <DeleteOutlineIcon />
          </IconButton>
        }
        avatar={<Avatar sx={{ bgcolor: red[500] }}>M</Avatar>}
        title={<Typography> {todo.title} </Typography>}
        subheader={todo.category}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {todo.detail}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default TodoCard;
