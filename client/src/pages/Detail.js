import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "./Detail.css"
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
      <Container fluid>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">{this.state.product.name}</h1>
            <h5 class="lead">{this.state.product.description}</h5>
            <br />
            <p>
              Location: {this.state.product.neighborhood}
              <br />
              Call: {this.state.product.phoneNumber}
            </p>
          </div>
        </div>
        <Row>
          <Col size="md-2">
            <Link to="/products">← Products</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;