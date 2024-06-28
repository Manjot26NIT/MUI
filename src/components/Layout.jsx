import React from 'react'
import Appdrawer from './Appdrawer'
import {Outlet} from 'react-router-dom'
import { Box } from '@mui/material'
function Layout() {
  return (
    <>
    <Box sx={{display:'flex'}} >
    <Appdrawer/>
    <Outlet/>
    </Box>
    </>
  )
}

export default Layout