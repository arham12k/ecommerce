import React from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import { useSelector } from "react-redux";

const Menu = () => {
  const { data } = useSelector((state) => state.data);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="menu-container">
      <div className="menu">
        {data.map((item) => (
          <Card key={item.name} item={item}></Card>
        ))}
      </div>
      <button className="btn" onClick={handleClick}>
        Home
      </button>
    </div>

    // <h1>hello</h1>
  );
};

export default Menu;
