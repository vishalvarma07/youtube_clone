import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetch = async()=>{
      if(!ignore){
        const data = await fetchFromAPI(`${selectedCategory}`,'search')
        //console.log(data)
        setVideos(data.items);
        ignore = true;
      }
    }
    fetch()
    .catch((err) => {
      console.log(err)
    })
  }, [selectedCategory]);

  return (
    <Stack
      sx = {{flexDirection : { sx: 'column', md: "row" }}} //md- medium devices and above, sx- other cases
    >
      <Box sx = {{
        height: {sx : 'auto', md:'92vh'}, 
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md:2 }  
        }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          {/* <Typography className = 'copyright'
            variant='body2'
            sx= {{ mt:1.5, color: '#fff' }}>
            Copyright Vishal Varma 2022
          </Typography> */}
      </Box>

      <Box sx={{p:2, overflowY: 'auto', height:'90vh', flex: 2}}>
        <Typography variant ='h4' fontWeight="bold" mb={2} color='white'>
          {selectedCategory} <span style={{color:'red'}}>Videos</span>
        </Typography>
        {(videos.length !== 0) && <Videos videos={videos}/>}
      </Box>
    </Stack>
  )
}

export default Feed