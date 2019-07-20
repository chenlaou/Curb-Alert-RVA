import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="fnavbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="https://github.com/chenlaou/Curb-Alert-RVA"
                className="nav-link"
              >
              Curb Alert RVA | 2019 © 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
