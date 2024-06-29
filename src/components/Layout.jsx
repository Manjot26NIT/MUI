import React from 'react'
import Appdrawer from './Appdrawer'
import {Outlet} from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import Appbar from './Appbar'

import AlertDialogSlide from './Dialog'

function Layout() {
  return (
    <>
   
    <Grid container rowGap={2} >
        
    <Grid item lg={2}></Grid>
    <Grid item lg={10}><Appbar/></Grid>
   <Grid item lg={2} ><Appdrawer/></Grid>
   <Grid item lg={10} ><Outlet/></Grid>
   </Grid>
    </>
    
  )
}

export default Layout