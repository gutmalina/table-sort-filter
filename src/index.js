import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
