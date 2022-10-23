import React from "react";
import ReactDOM from "react-dom";
import { StyleProvider } from "./styles/style-provider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
