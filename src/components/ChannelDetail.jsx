import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);

  const {id} = useParams();

  console.log(channelDetail);

  useEffect(() => {
    let ignore = false;
    const fetch = async() =>{
      if(!ignore){
        const data = fetchFromAPI(`channels?part="snippet&id=${id}`)
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