import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import { clearCart } from "../data/store/cartSlice";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function showModel() {
    let elem = document.querySelector(".model");
    elem.classList.toggle("hide");
  }

  const hamburger = cart.filter((elem) => elem.name === "Hamburger");
  const Fries = cart.filter((elem) => elem.name === "Fries");
  const Coke = cart.filter((elem) => elem.name === "Coke");
  const Pepsi = cart.filter((elem) => elem.name === "Pepsi");
  let totalSum = 0;
  const totalArray = [...hamburger, ...Coke, ...Pepsi, ...Fries];
  totalArray.forEach((item) => {
    totalSum += Number(item.price);
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  function handleCheckout() {
    let elem = document.querySelector(".model");
    elem.classList.toggle("hide");
    dispatch(clearCart());
    navigate("/checkout");
  }
  return (
    <div className="navbar">
      <div className="logo" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
        </svg>
        Foods kitchen
      </div>

      <div className="cart">
        <FaCartPlus />

        <p onClick={showModel} className="badge">
          {cart.length}
        </p>
      </div>

      <div className="model hide">
        <div>
          <p>Order Summary</p>
          {cart.length > 0 && (
            <div className="list">
              <div>
                {/* hamburger 50 * {hamburger.length} = {50 * hamburger.length} */}
                {hamburger.length > 0 && (
                  <div>
                    {hamburger[0].name} {hamburger.length} * 200 ={" "}
                    {200 * hamburger.length}
                  </div>
                )}
                {Pepsi.length > 0 && (
                  <div>
                    {Pepsi[0].name} {Pepsi.length} * 50 = {50 * Pepsi.length}
                  </div>
                )}
                {Fries.length > 0 && (
                  <div>
                    {Fries[0].name} {Fries.length} * 100 = {100 * Fries.length}
                  </div>
                )}
                {Coke.length > 0 && (
                  <div>
                    {Coke[0].name} {Coke.length} * 50 = {50 * Coke.length}
                  </div>
                )}
              </div>
            </div>
          )}
          {
            <div className="total">
              your total is {totalSum}
              <button className="btn" onClick={handleCheckout}>
                checkout
              </button>
            </div>
          }
          {cart.length === 0 && <div>Cart is Empty</div>}
        </div>

        {/* <button className="btn closeBtn" onClick={showModel}>
          X
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
