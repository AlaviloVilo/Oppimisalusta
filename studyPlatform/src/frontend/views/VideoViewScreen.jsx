import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ReactPlayer from 'react-player';
import NavigationBar from '../components/NavigationBar';
import CommentsSection from './CommentsView';


export default function VideoView({ url }) {

  useEffect(() => {
    console.log('VideoView component rendered');
  }, []);

 
  const comments = [
    { id: 1, author: 'Joku', content: 'hyvähyvä!' },
    { id: 2, author: 'Joku', content: 'jeejeee' },
    { id: 3, author: 'Anonymous', content: 'joojoo' },
  ];

 
  console.log('Comments:', comments);

  return (
    <>
      <NavigationBar />
      {console.log('NavigationBar rendered')}
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',  
          width: '100vw',
          minHeight: '100vh',
          backgroundColor: 'white',
        }}
      >
        {console.log('Main Box rendered')}

        <Box
          sx={{
            width: '67%', 
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
            overflowY: 'auto',
          }}
        >
          {console.log('Left side (Video and Comments) Box rendered')}
          
          <Typography
            sx={{
              color: 'black',
              fontSize: '1.5em',
              fontWeight: 'bold',
              paddingBottom: '20px',
            }}
          >
            VILO
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '1em',
              
              paddingBottom: '20px',
            }}
          >
            Pitäiskö tässä olla vaikka kurssin nimi? 
          </Typography>
          {console.log('Typography rendered')}
          
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#F4F4F4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              //height: 'auto',
              boxSizing: 'border-box'
            }}
          >
            {console.log('Video player container rendered')}
            <ReactPlayer
              url={url || 'https://www.youtube.com/watch?v=Ofp26_oc4CA'}
              controls={true}
              width='100%'
              
            />
            {console.log('ReactPlayer rendered')}
          </Box>

          <Box
            sx={{
              width: '100%',
              marginTop: '20px',
              backgroundColor: 'white',
              padding: '20px',
              borderTop: '1px solid #ddd'
            }}
          >
            {console.log('Comments section container rendered')}
            <Typography
              variant="h6"
              sx={{ marginBottom: '20px', fontWeight: 'bold' }}
            >
              Comments
            </Typography>
            {console.log('Comments title rendered')}
            <CommentsSection comments={comments} />
            {console.log('CommentsSection component rendered')}
          </Box>
        </Box>

        <Box
          sx={{
            width: '33%', 
            backgroundColor: '#f7f7f7',
            padding: '20px',
            borderLeft: '1px solid #ddd',
            overflowY: 'auto', 
          }}
        >
          {console.log('Right side (NavSidebar) Box rendered')}
          
          {console.log('NavSidebar component rendered')}
        </Box>
      </Box>
    </>
  );
}