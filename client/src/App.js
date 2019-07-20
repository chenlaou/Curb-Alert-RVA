import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import withSplashScreen from "./components/Splashscreen";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Detail} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route component={NoMatch} /> */}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withSplashScreen(App);
