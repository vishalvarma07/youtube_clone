import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';


const Feed = () => {
  return (
    <Stack
      sx = {{flexDirection : { sx: 'column', md: "row" }}} //md- medium devices and above, sx- other cases
    >
      <Box sx = {{
        height: {sx : 'auto', md:'92vh'}, 
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md:2 }  
        }}>
          <Sidebar/>
          <Typography className = 'copyright'
            variant='body2'
            sx= {{ mt:1.5, color: '#fff' }}>
            Copyright Vishal Varma 2022
          </Typography>
      </Box>

      <Box sx={{p:2, overflowY: 'auto', height:'90vh', flex: 2}}>
        <Typography variant ='h4' fontWeight="bold" mb={2} color='white'>
          New <span style={{color:'red'}}>Videos</span>
        </Typography>
        <Videos/>
      </Box>
    </Stack>
  )
}

export default Feed