import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from "../Middlewares/getProductData";

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        loading: false,
        error: null,
        brandFilter: '',
        categoryFilter: '',
        priceFilter: {
            min: '',
            max: ''
        },
        ratingFilter: '',
        wishlistproducts : [],
        searchData: ''
    },
    reducers: {
        applyBrandFilter : (state, action) => {
            state.brandFilter = action.payload;
        },
        applyCategoryFilter : (state, action) => {
            state.categoryFilter = action.payload;
        },
        applyPriceFilter : (state, action) => {
            state.priceFilter.min = action.payload.min;
            state.priceFilter.max = action.payload.max;
        },
        applyRatingFilter : (state, action) => {
            state.ratingFilter = action.payload;
        },
        applyRestFilter : (state, action) => {
            state.brandFilter = '';
            state.categoryFilter = '';
            state.priceFilter.min = '';
            state.priceFilter.max = '';
            state.ratingFilter = '';
        },
        whishlistData : (state, action) => {
            state.wishlistproducts.push(action.payload);
        },
        searchFilter : (state, action) => {
            state.searchData = action.payload;
        }
    },
    extraReducers: {
        [getProductData.pending] : (state, action) => {
            state.loading = true;
        },
        [getProductData.fulfilled] : (state, action) => {
            state.loading = false;
            state.products = action.payload.data;
        },
        [getProductData.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { applyBrandFilter, applyCategoryFilter, applyPriceFilter, applyRatingFilter, 
    applyRestFilter, whishlistData, searchFilter } = productSlice.actions
export default productSlice.reducer;