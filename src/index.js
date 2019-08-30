import React from "react";
import styled from "styled-components"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Global styling 
const PrettyApp = styled(App) `
  background: black;
  color: white;
`

ReactDOM.render(<PrettyApp />, document.getElementById("root"));
