import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import { Link }  from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
         <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      
      <Toolbar sx={{ justifyContent: 'space-between' }}>

       <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'float-left' }}>
          Library_Management
        </Typography>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Add Book </Button>
        <Button color='inherit'>Edit Book</Button>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar