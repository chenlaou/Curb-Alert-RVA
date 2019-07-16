import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <div className="mask">
            <h1>
              CurbAlert RVA
            </h1>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;
