import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react'

export const Avatars = ()=> {
  return (
    <div className='avatar'>
      <Stack direction="row" spacing={-0.8}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:20, height:20}}/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{width:20, height:20}}/>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"sx={{width:20, height:20}} />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"sx={{width:20, height:20}} />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"sx={{width:20, height:20}} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{width:20, height:20}}/>
      </Stack>
    </div>
  )
}

 