import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { useState } from "react";
// import Welcome from "./components/Welcome";
import data from "../src/data/feeds.json";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
