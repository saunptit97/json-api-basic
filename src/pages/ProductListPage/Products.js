import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import Product from "./../../components/ProductItem/Product";
import callAPI from "./../../util/callAPI";
import { Link } from "react-router-dom";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ""
    };
  }
  onDelete = id => {
    var products = this.state.products;
    callAPI(`products/${id}`, "DELETE", null).then(() => {
      var index = this.findIndex(products, id);
      products.splice(index, 1);
      this.setState({
        products: products
      });
    });
  };
  componentDidMount() {
    callAPI("products", "GET", null).then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) return (result = index);
    });
    return result;
  };
  render() {
    var products = this.state.products;
    return (
      <div className="container">
        <Link to="/product/add" className="btn btn-primary">
          <i className="fa fa-plus" /> Add product
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}
export default Products;
