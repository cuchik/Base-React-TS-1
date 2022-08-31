import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// eslint-disable-next-line no-restricted-imports
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-restricted-imports
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // TODO: StrictMode will render 2 times at dev mode at initial page loaded
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
