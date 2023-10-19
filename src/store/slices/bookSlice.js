import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks } from '../creators/booksCreator';

const initialState = {
    books: [],
    isLoadingBooks: false,
    status: '',
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.isErrorBooks = '';
            state.status = 'fulfilled';
        });

        builder.addCase(fetchAllBooks.pending, (state, action) => {
            state.books = [];
            state.isErrorBooks = '';
            state.status = 'pending';
        });

        builder.addCase(fetchAllBooks.rejected, (state, action) => {
            state.books = [];
            state.isErrorBooks = action.payload;
            state.status = 'rejected';
        });
    },
});

const bookReducer = bookSlice.reducer;

export const { setBooks } = bookSlice.actions;
export default bookReducer