//React Libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App"


//Styles
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "./styles/appStyles.scss";

ReactDOM.render(<App/>,document.getElementById("app"));
module.hot.accept();