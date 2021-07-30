import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import './LoginPage.css'

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state)
      this.props.handleSignupOrLogin()
      this.props.history.push('/')
    }
    catch (error) {
      console.log(error)
      alert('Invalid Credentials!');
  }
}

  render() {
    return (
      <div className="container-fluid login-form col-3">
          <h1>LOG IN</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="name@example.com"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label for="floatingInput">Email address</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={this.state.pw} 
                name="pw"
                onChange={this.handleChange}
              />
              <label for="floatingPassword">Password</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-floating">
              <button className="btn btn-dark">
                LOG IN
              </button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;