import React from "react";
import "./logo.css";

function Logo({ children, className = "" }) {
  return <div className={`jumbotron landing ${className}`}>{children}</div>;
}

export default Jumbotron;
