import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Paper elevation={12}>
        <Typography variant='h5' sx={{ textAlignLast: 'center', fontWeight: 'bold' }} p={2}>Hey, Contact Here</Typography>
        <Box p={3}>
          <Box sx={{ paddingTop: '15px' }}><TextField id="standard-basic" label="Enter Full Name" variant="standard" fullWidth /></Box>
          <Box sx={{ paddingTop: '15px' }}><TextField id="standard-basic" label="Enter Email ID" variant="standard" fullWidth/></Box>
          <Box sx={{ paddingTop: '15px' }}><TextField id="standard-basic" type='number' label="Enter Phone Number" variant="standard" fullWidth/></Box>
          <Box sx={{ paddingTop: '15px' }}>
            <TextField 
              rows={4} 
              multiline 
              fullWidth
              id="outlined-basic" 
              label="Message" 
              variant="outlined" 
            />
          </Box>
        </Box>
        <Box sx={{ textAlignLast :'center', paddingBottom:'25px', paddingTop: '10px' }} ><Button variant="contained">Submit</Button></Box>
      </Paper>
    </div>
  )
}

export default Contact