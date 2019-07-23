import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "./Detail.css";
import API from "../utils/API";

class Detail extends Component {
  state = {
    product: {}
  };
  // When this component mounts, grab the product with the _id of this.props.match.params.id
  // e.g. localhost:3000 products/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Free {this.state.product.name}</h1>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5 className="lead">
                <em>{this.state.product.description}</em>
              </h5>
            </div>
            <br />
            <h5>
              Location: {this.state.product.neighborhood}
              <br />
              Call: {this.state.product.phoneNumber}
            </h5>

            <br />
            <Link className="arrow" to="/products">
              ← Products
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default Detail;
