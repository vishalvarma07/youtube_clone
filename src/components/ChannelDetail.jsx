import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    let ignore = false;
    const fetch = async() =>{
      console.log(id);
      if(!ignore){
        const data = await fetchFromAPI('channelDetail','','channels',id);
        console.log(data);
        setChannelDetail(data?.items[0]);
        const videoData = await fetchFromAPI('channelVideos','','search',id);
        setVideos(videoData?.items);
        console.log(videoData);
        ignore = true;
      }
    }
    fetch()
    .catch((err) => {
      console.log(err)
    })
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          
        />
      </Box>
    </Box>
  )
}

export default ChannelDetail