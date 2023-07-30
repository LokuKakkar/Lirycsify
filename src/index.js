import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom'

// require("../db/config");
// import pastSearch from "../db/pastSearch";

ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>


, document.getElementById("root"));
