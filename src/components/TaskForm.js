import React, { Component } from "react";
import callAPI from "./../util/callAPI";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
      price: ""
    };
  }
  handleChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      callAPI(`products/${match.params.id}`, "GET", null).then(res => {
        var data = res.data;
        this.setState({
          name: data.name,
          id: data.id,
          status: data.status,
          price: data.price
        });
        console.log(this.state);
      });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    var { history } = this.props;
    var id = this.state.id;
    if (id) {
      callAPI(`products/${id}`, "PUT", {
        name: this.state.name,
        price: this.state.price,
        status: this.state.status
      }).then(res => {
        history.goBack();
      });
    } else {
      callAPI("products", "POST", {
        name: this.state.name,
        price: this.state.price,
        status: this.state.status
      }).then(res => {
        history.goBack();
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name Product: </label>
        <input
          type="text"
          placeholder="Enter your name product"
          className="form-control"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Price: </label>
        <input
          type="text"
          placeholder="Enter price"
          className="form-control"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <label>Status</label>
        <br />
        <label>
          <input
            type="checkbox"
            name="status"
            onChange={this.handleChange}
            checked={this.state.status}
          />{" "}
          Còn hàng
        </label>
        <br />
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-plus" /> Add Product
        </button>
      </form>
    );
  }
}
export default TaskForm;
