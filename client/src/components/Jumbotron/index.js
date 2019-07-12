import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children, className = "" }) {
  return <div className={`jumbotron landing ${className}`}>{children}</div>;
}

export default Jumbotron;
