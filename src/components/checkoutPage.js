import React from "react";

import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };

  // Render the component
  return (
    <div className="welcomePage">
      <h1>thankyou for shopping, please visit us again</h1>

      <button className="btn" onClick={handleClick}>
        Go to menu
      </button>
    </div>
  );
};

export default CheckoutPage;
