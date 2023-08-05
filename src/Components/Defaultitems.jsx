import React from 'react'
import Card from './Card'
import Banner from './Banner'
import { Box } from '@mui/material'

const Defaultitems = () => {
  return (
    <div>
      <Box>
        <Banner imageSource={"https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"} />
      </Box>
      <Box sx={{ paddingTop: '10px' }}>  
        <Banner imageSource={"https://img.freepik.com/premium-vector/today-shopping-day-with-special-offer-banner-design_624938-1337.jpg"}/>
      </Box>
      <Box sx={{ paddingTop: '10px' }}>  
        <Banner imageSource={"https://cdn2.vectorstock.com/i/1000x1000/48/46/best-offer-banner-for-shops-promotional-proposal-vector-28084846.jpg"}/>
      </Box>
    </div>
  )
}

export default Defaultitems