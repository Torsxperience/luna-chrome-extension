import React from "react";
import ReactDOM from "react-dom";
import App from "../containers/App";

console.log(chrome.storage);

ReactDOM.render(<App/>, document.querySelector("#app-root"));
