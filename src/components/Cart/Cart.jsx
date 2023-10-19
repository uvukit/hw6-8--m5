import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
// import classes from "./Cart.module.css";
import fetchAllCart from "../../store/creators/cartCreator";
import { Spinner } from "../../pages";

const Cart = ({ addToCart, removeFromCart, deleteItem }) => {
  const { cartStatus, cart, cartError } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalCost = (cart) => {
    let totalCost = 0;
      cart.forEach((item) => {
      totalCost += item.total;
    });
  
    return totalCost;
  };
  

  useEffect(() => {
    dispatch(fetchAllCart());
  }, [dispatch]);

  const renderCartItems = (item, idx) => {
    const { title, id, count, total } = item;
    const onAddToCart = () => addToCart(id);
    const onRemoveFromCart = () => removeFromCart(id);
    const onDeleteFromCart = () => deleteItem(id);
    return (
      <tr key={`item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <Button
            onClick={onAddToCart}
            className="mx-1"
            variant="outline-success"
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
          <Button
            onClick={onRemoveFromCart}
            className="mx-1"
            variant="outline-warning"
          >
            <i className="fa-solid fa-minus"></i>
          </Button>
          <Button
            onClick={onDeleteFromCart}
            className="mx-1"
            variant="outline-danger"
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </td>
      </tr>
    );
  };

  const statusCases = {
    empty: "You have no item in your cart",
    rejected: cartError,
    pending: <Spinner />,
  };

  const totalCost = calculateTotalCost(cart);

  return (
    <div>
      <h1>Your Order</h1>

      {statusCases[cartStatus] ? (
        statusCases[cartStatus]
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{cart?.map(renderCartItems)}</tbody>
        </Table>
      )}
      <div>Total cart items cost: {totalCost}$</div>
    </div>
  );
};

export default Cart;
