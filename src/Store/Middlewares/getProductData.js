import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

export const getProductData = createAsyncThunk("getProductData", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${base_url}?limit=100`);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})