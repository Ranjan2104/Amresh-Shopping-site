import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import WishlistCards from '../Components/WishlistCard';
import { useDispatch, useSelector,  } from 'react-redux';
import { getProductData } from '../Store/Middlewares/getProductData';

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const { wishlistproducts } = useSelector((state) => state.productData);
  
  return (
    <Box flex={4} p={2} sx={{ minHeight: '100vh' }}>
      {
        wishlistproducts.length !== 0 ?
        wishlistproducts && wishlistproducts.map((ele) => {
          return (
            <div key={ele.id}>
              <WishlistCards data={ele}/>
            </div>
          )
        })
        :
        <h2>No Data Found!</h2>
      }
    </Box>
  )
}

export default Wishlist