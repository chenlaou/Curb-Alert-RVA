import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Products extends Component {
  state = {
    products: [],
    zipCode: "",
    phoneNumber: "",
    description: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({
          products: res.data,
          zipCode: "",
          phoneNumber: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteProducts = id => {
    API.deleteProducts(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.zipCode && this.state.phoneNumber) {
      API.saveProducts({
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber,
        description: this.state.description
      })
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Submit a New Product</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.zipCode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="Zip Code (required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.phoneNumber && this.state.zipCode)}
                onClick={this.handleFormSubmit}
              >
                Submit Product
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Product List</h1>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(products => (
                  <ListItem key={products._id}>
                    <Link to={"/products/" + products._id}>
                      <strong>
                        {products.zipCode} by {products.phoneNumber}
                      </strong>
                    </Link>
                    <DeleteBtn
                      onClick={() => this.deleteProducts(products._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
