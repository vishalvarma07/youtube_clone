import React from 'react';
import { Stack, Box } from '@mui/system';
import { VideoCard, ChannelCard } from './';

const Videos = ({videos}) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justify-content="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key= {idx} display='flex' justifyContent='space-around'>
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
          {item.id.videoId && <VideoCard video={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos