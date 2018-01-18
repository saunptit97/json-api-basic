import React, { Component } from "react";
import TaskForm from "./../../components/TaskForm";
class ProductActionPage extends Component {
  render() {
    var history = this.props.history;
    var match = this.props.match;
    return (
      <div className=" row">
        <h2 className="text-center">Add Product </h2>
        <div className="col-md-6 panel ">
          <TaskForm history={history} match={match} />
        </div>
      </div>
    );
  }
}
export default ProductActionPage;
