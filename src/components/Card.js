import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData } from "../data/store/cartSlice";

const Card = ({ item }) => {
  const { data } = useSelector((state) => state.data);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleAdd(name) {
    // console.log(data);

    // const isItemAdded = cart.find((c) => c._id === item._id);

    const addedItems = data.filter((item) => item.name === name);
    console.log(addedItems);

    const itemname = addedItems[0];
    const newcart = cart.includes(name);
    console.log(newcart);

    dispatch(addData(itemname));
  }

  function handleDelete(name) {
    dispatch(deleteData(name));
  }

  return (
    <div className="card">
      <div className="cardImg">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.price}</p>
      </div>

      <div className="card-buttons">
        <button className="btn" onClick={() => handleAdd(item.name)}>
          +
        </button>
        <button
          className="btn btn-delete"
          onClick={() => handleDelete(item.name)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
