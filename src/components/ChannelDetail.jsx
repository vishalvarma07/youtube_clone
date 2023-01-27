import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    let ignore = false;
    const fetch = async() =>{
      console.log(id);
      if(!ignore){
        const data = await fetchFromAPI('','channels',id);
        console.log(data);
        setChannelDetail(data?.items[0]);
        ignore = true;
      }
    }
    fetch()
    .catch((err) => {
      console.log(err)
    })
  },[id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail