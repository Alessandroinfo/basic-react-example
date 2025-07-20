import ReactDOM from "react-dom/client";
import Hello from "./components/hello";
import React from "react";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);