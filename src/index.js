import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
//import Comment from "./Comment";
import Counterlist from "./Counterlist";

ReactDOM.render(
  <React.StrictMode>
    <Counterlist />
  </React.StrictMode>,
  document.getElementById("root")
);
