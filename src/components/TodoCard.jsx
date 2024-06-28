import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Card as MuiCard, CardContent, CardActions, Typography, Button, CardHeader } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

function TodoCard({ todo }) {
  return (
    <MuiCard  sx={{ maxWidth: 370 }}>
      <CardHeader
        action={
          <IconButton>
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
