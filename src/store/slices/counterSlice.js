import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
};

const countSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        trigger: (state, action) => {
            state.count += action.payload;
        },
    },
});

const countReducer = countSlice.reducer;

export const { trigger } = countSlice.actions;
export default countReducer;
