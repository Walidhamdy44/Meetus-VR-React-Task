import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import ContextProvider from "./services/providers/ProductProvider";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
    <Toaster />
  </ContextProvider>
);
