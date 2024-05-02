import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/saga-blue/theme.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "./index.css"; // Custom styles
import 'primeicons/primeicons.css';
import Root from "./root";
import { store } from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
      <ToastContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
