import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  onDelete = product => {
    //eslint-disable-next-line
    if (confirm("Do you want to delete this product")) {
      this.props.onDelete(product);
    }
  };
  render() {
    var { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.status === true ? "Còn hàng" : "Hết hàng"}</td>
        <td>{product.price}$</td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-warning">
            <i className="fa fa-edit" /> Edit
          </Link>
          <button
            className="btn btn-danger m-l"
            onClick={() => this.onDelete(product.id)}
          >
            <i className="fa fa-close" /> Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Product;
