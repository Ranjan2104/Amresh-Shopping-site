import { combineReducers } from "@reduxjs/toolkit";
import productSlice from './ProductSlice';

const rootReducer = combineReducers({
    productData : productSlice
})

export default rootReducer