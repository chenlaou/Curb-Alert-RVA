import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
<<<<<<< HEAD
import logo from "../../images/logo.png";
import "./Nav.css";
=======
import logo from "../../images/logo.png"
>>>>>>> e37a6018fb5469ed84358f2e86aa502008ad7948

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <a className="navbar-brand" href="/">
                            <img src= {logo} width="250" height="auto" alt=""/>
                        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

<<<<<<< HEAD
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <a className="navbar-brand" href="/" target="">
            <img className="logo" src={logo} alt="" />
          </a>

=======
        

        <div className="collapse navbar-collapse justify-content-md-left" id="navbarsExample10">
>>>>>>> e37a6018fb5469ed84358f2e86aa502008ad7948
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>


          {localStorage.jwtToken ? userLink : loginRegLink}

          
        </div>
      </nav>
    );
  }
}

export default withRouter(Landing);
