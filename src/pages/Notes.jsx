import React from 'react'
import { Grid } from '@mui/material'
import {Paper} from '@mui/material'
function Notes() {
  return (
 <>
 <Grid container >
    <Grid item md={3}>
      <Paper>1</Paper>
    </Grid>
    <Grid item md={3} >
      <Paper>1</Paper>
    </Grid>
    <Grid item md={3} >
      <Paper>1</Paper>
    </Grid  >
    <Grid item md={3}>
      <Paper>1</Paper>
    </Grid>

  </Grid>  
 </>
  
  )
}

export default Notes