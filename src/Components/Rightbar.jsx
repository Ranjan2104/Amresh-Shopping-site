import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Slider, Typography } from '@mui/material';
import AdCard from '../Components/Adds'
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../Store/Middlewares/getProductData';
import { applyBrandFilter, applyCategoryFilter, applyPriceFilter, applyRatingFilter, applyRestFilter } from '../Store/Reducers/ProductSlice';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8; const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const brands = [];
const categoryData = [];

const Rightbar = ({ urlPath }) => {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState({
    min: 0,
    max: ''
  })
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getProductData());
  },[]);

  const handleApplyFilters = () => {
    dispatch(applyBrandFilter(brand));
    dispatch(applyCategoryFilter(category));
    dispatch(applyPriceFilter(price));
    dispatch(applyRatingFilter(rating));
  }

  const handleReset = () => {
    dispatch(applyRestFilter());
    setBrand('');
    setCategory('');
    setRating('');
    setPrice(prevPrice => ({
      ...prevPrice,
      min: 0,
      max: ''
    }));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrice(prevPrice => ({
      ...prevPrice,
      [name]: value 
    }));
  };

  for(let i = 0; i < products?.products?.length; i++) {
    brands.push(products?.products[i]?.brand)
  }

  for(let i = 0; i < products?.products?.length; i++) {
    categoryData.push(products?.products[i]?.category)
  }

  return (
    <Box p={2} flex={1}>
      <Box position={'fixed'}>
        {
          urlPath === 'product' ? (
            <Box>
              <Typography sx={{ paddingTop: '15px' }}>Select Brand</Typography>
              <Box sx={{ paddingTop: '15px' }}>
                <FormControl sx={{ width: '15rem' }}>
                  <InputLabel id="demo-simple-select-label">Product Brand</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brand}
                    label="Product Brand"
                    onChange={(e) => setBrand(e.target.value)}
                    MenuProps={MenuProps}
                  >
                    {[... new Set(brands)].map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Typography sx={{ paddingTop: '15px' }}>Select Category</Typography>
              <Box sx={{ paddingTop: '15px' }}>
                <FormControl sx={{ width: '15rem' }}>
                  <InputLabel id="demo-simple-select-label">Product Categories</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Select from the list"
                    onChange={(e) => setCategory(e.target.value)}
                    MenuProps={MenuProps}
                  >
                    {[... new Set(categoryData)].map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Typography sx={{ paddingTop: '25px' }}>Select Price Range</Typography>
              <Box sx={{ paddingTop: '15px' }}>
                <FormControl sx={{ width: '15rem' }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Minimum Price</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                    label="Minimum Price"
                    type='number'
                    name="min"
                    value={price.min}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
              <Box sx={{ paddingTop: '15px' }}>
                <FormControl sx={{ width: '15rem' }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Maximum Price</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                    label="Maximum Price"
                    type='number'
                    name="max"
                    value={price.max}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
              <Typography sx={{ paddingTop: '25px' }}>Select Rating</Typography>
              <Box sx={{ width: '15rem', paddingTop: '15px' }}>
                <Slider
                  valueLabelDisplay="auto"
                  defaultValue={0}
                  color="secondary"
                  min={0}
                  max={5}
                  onChange={(e) => setRating(e.target.value)}
                />
              </Box>
              <Box sx={{ paddingTop: '40px', display:'flex', gap: '15px' }}>
                <Button variant="outlined" onClick={handleApplyFilters}>Apply Filter</Button>
                <Button variant="contained" color='error' onClick={handleReset}>Reset All</Button>
              </Box>
            </Box>
          )
            :
            urlPath === 'contact' || urlPath === 'about' ? '' :
              <AdCard />
        }
      </Box>
    </Box>
  )
}

export default Rightbar