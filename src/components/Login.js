import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: ""
    };
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onLogin = event => {
    event.preventDefault();
    const { txtUsername, txtPassword } = this.state;
    if (txtUsername === "admin" && txtPassword === "12345") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword
        })
      );
    }
  };

  render() {
    const { txtUsername, txtPassword } = this.state;
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      return <Redirect to="/products" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <form onSubmit={this.onLogin}>
              <div className="form-group">
                <label>Login</label>
                <div className="form-group">
                  <label>Username: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtUsername"
                    id="username"
                    placeholder="Please enter your username"
                    value={txtUsername}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input
                    type="password"
                    className="form-control"
                    name="txtPassword"
                    id="password"
                    placeholder="password"
                    value={txtPassword}
                    onChange={this.onChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
