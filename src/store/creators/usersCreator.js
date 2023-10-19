import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const fetchAllUsers = createAsyncThunk('users/fetchAll', async (payload, thunkApi) => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // const users = await response.json();
        // return users;
        const response = await api.getUsers();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message ? err.message
            : 'Something has gone wrong')
    }
})

export default fetchAllUsers;