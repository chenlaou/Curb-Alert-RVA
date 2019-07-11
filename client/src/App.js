import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Switch>
            {/* <Route exact path="/" component={Products} /> */}
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Detail} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
