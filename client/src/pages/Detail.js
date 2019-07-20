import React, { Component } from "react";

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
      <div>
        <div>
          <h1>{this.state.product.name}</h1>

          <h2>{this.state.product.description}</h2>
          <br />
        </div>
        <br />
        <div>
          <p>
            Location: {this.state.product.neighborhood}
            <br />
            Call: {this.state.product.phoneNumber}
          </p>
        </div>
      </div>
    );
  }
}

export default Detail;
