import React from "react";
import { BookList, Cart } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../helpers";

const Main = () => {
  const { cart } = useSelector((state) => state.cart);
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addToCart = (bookId) => updateOrder({books, cart, bookId, dispatch, quantity: 1});
  const removeFromCart = (bookId) => updateOrder({books, cart, bookId, dispatch, quantity: -1});
  const deleteItem = (bookId) => updateOrder({books, cart, bookId, dispatch,quantity:3});
  

  return (
    <main className="container">
      <BookList addToCart={addToCart} />
      <Cart addToCart={addToCart} removeFromCart={removeFromCart} deleteItem={deleteItem} />
    </main>
  );
};

export default Main;
