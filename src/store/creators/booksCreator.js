import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../api';

export const fetchAllBooks = createAsyncThunk("books/fetchAll", async (payload, thunkApi) => {
    try {
        const response = await api.getBooks();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response.data : err.message)
    }
})
