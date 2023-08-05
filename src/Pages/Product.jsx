import React, { useEffect } from 'react';
import Card from '../Components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getProductData } from '../Store/Middlewares/getProductData';

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, brandFilter, categoryFilter, 
    priceFilter, ratingFilter, searchData } = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const filteredProducts = products?.products
    .filter((ele) => {
      if (brandFilter?.length !== 0) {
        return ele?.brand?.toLowerCase() === brandFilter?.toLowerCase();
      } 
      else {
        return true;
      }
    })
    .filter((ele) => {
      if (categoryFilter?.length !== 0) {
        return ele?.category?.toLowerCase() === categoryFilter?.toLowerCase();
      } 
      else {
        return true;
      }
    })
    .filter((ele) => {
      if (priceFilter.min !== '' && priceFilter.max !== '') {
        return ele?.price >= priceFilter.min && ele?.price <= priceFilter.max;
      } 
      else if (priceFilter.min === '' && priceFilter.max !== '') {
        return ele?.price <= priceFilter.max;
      } 
      else if (priceFilter.min !== '' && priceFilter.max === '') {
        return ele?.price >= priceFilter.min;
      } 
      else {
        return true;
      }
    })
    .filter((ele) => {
      if (ratingFilter !== '') {
        return ele?.rating <= ratingFilter;
      } 
      else {
        return true;
      }
    })
    .filter((ele) => {
      if(searchData !== '') {
        return searchData?.toLowerCase().includes(ele?.brand.toLowerCase()) || 
        searchData?.toLowerCase().includes(ele?.category.toLowerCase()) ||
        searchData?.toLowerCase().includes(ele?.title.toLowerCase());
      }
      else {
        return ele;
      }
    });

  return (
    <div className='gridDefault'>
      {filteredProducts.length === 0 ? (
        <h2>No Result Found!</h2>
      ) : (
        filteredProducts.map((ele) => (
          <div key={ele.id}>
            <Card data={ele} />
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
