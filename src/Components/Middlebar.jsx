import { Box } from '@mui/material'
import React from 'react'
import Defaultitems from './Defaultitems';
import About from '../Pages/About';
import Product from '../Pages/Product';
import Wishlist from '../Pages/Wishlist';
import Contact from '../Pages/Contact'

const Middlebar = ({urlPath}) => {
  
  return (
    <Box flex={4} p={2}>
        {
            urlPath === 'home' ? <Defaultitems /> 
            : 
            urlPath === 'about' ? <About /> 
            : 
            urlPath === 'product' ? <Product />   
            : 
            urlPath === 'wishlist' ? <Wishlist /> 
            : 
            urlPath === 'contact' ? <Contact /> 
            : ''
        }
    </Box>
  )
}

export default Middlebar