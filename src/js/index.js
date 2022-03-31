//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TodoForm from "./component/TodoForm.jsx";

//render your react application
ReactDOM.render(<TodoForm />, document.querySelector("#app"));
