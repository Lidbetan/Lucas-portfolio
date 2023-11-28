import "./styles/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProvider from "./components/context/ThemeContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
