import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Provider } from "react-redux";
import store from "./data/store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/",
        element: <Navbar />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/checkout",
        element: <checkoutPage />,
      },
    ],
  },
  // {
  //   path: "menu",
  //   element: <Menu />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
