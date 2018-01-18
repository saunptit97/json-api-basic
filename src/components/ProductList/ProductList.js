import React, { Component } from "react";
class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary m-t">
        <div className="panel-heading">
          <h3 className="panel-title">List Product</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover table-bordered m-t">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name Product</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ProductList;
