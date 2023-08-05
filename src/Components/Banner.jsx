import { Box } from '@mui/material'
import React from 'react'

const Banner = ({imageSource}) => {
  return (
    <div>
        <Box>
            <img className='imgBanner' src={imageSource}/>
        </Box>
    </div>
  )
}

export default Banner