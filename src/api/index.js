import axios from "axios";



const instance = axios.create({ baseURL: process.env.REACT_APP_SERVER_API });

//USERS
const getUsers = () => instance.get('/userList');

//POSTS
const getPosts = () => instance.get('/posts');

//BOOKS
const getBooks = () => instance.get('/books');
const createBooks = (payload) => instance.post('/books', payload);

//CART
const getCartItems = () => instance.get('/cart');
const createCartItem = (payload) => instance.post('/cart', payload);
const editCartItem = (payload) => instance.put(`/cart/${payload.id}`, payload);
const deleteCartItem = (payload) => instance.delete(`/cart/${payload}`);


export const api = {
    getUsers,
    getPosts,
    getBooks,
    createBooks,
    getCartItems,
    createCartItem,
    editCartItem,
    deleteCartItem,
}

