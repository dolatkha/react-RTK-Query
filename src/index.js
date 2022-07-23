import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import App from "./app/App";
import store from "./app/redux";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
