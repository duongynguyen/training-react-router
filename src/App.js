import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

const showContentMenus = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ));
  }
  return result;
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <Menu />

        {/* Content */}
        <Switch>{showContentMenus(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
