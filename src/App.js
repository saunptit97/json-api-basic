import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">{this.showContentMenus(routes)}</div>
        </div>
      </Router>
    );
  }
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            key={index}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
