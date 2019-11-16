import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./store";
import { loadState, saveState } from "./utils/localStorage";
import { createBrowserHistory } from "history";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "antd/dist/antd.css";

const history = createBrowserHistory();
const initialState = loadState() || {};
const store = configureStore(initialState, history);
// const store = configureStore();

store.subscribe(() => {
  // if user was logged in, keep the login details
  const { loginReducer } = store.getState();
  if (loginReducer) saveState({ loginReducer });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
