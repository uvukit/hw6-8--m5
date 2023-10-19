import { createSlice } from "@reduxjs/toolkit";
import fetchAllUsers from "../creators/usersCreator";

const initialState = {
    users: [],
    isLoading: false,
    isError: '',
};

const usersSlice = createSlice({
    initialState,
    name: 'users',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isError = '';
            state.isLoading = false;
            state.users = action.payload;
        });

        builder.addCase(fetchAllUsers.pending, (state, action) => {
            state.isError = '';
            state.isLoading = true;
            state.users = [];
        });

        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
            state.users = [];
        });
    },
});

const usersReducer = usersSlice.reducer;

export default usersReducer;