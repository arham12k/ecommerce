import React from "react";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // window.location.href = "/menu";
    navigate("/menu");
  };

  // Render the component
  return (
    <div className="welcomePage">
      <h1>Welcome to Food's Kitchen</h1>

      <button className="btn" onClick={handleClick}>
        Go to menu
      </button>
    </div>
  );
};

export default Welcome;
