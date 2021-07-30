import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import QuizPage from "../../pages/QuizPage/QuizPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ResultPage from "../ResultPage/ResultPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import userService from "../../utils/userService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleSignupOrLogin = () => {
    console.log("handleSignupOrLogin");
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    console.log("handleLogout");
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header className="container-fluid">
          <NavBar user={user} handleLogout={this.handleLogout} />
        </header>
        <main class="container-fluid">
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              exact
              path="/settings"
              render={() =>
                userService.getUser() ? (
                  <SettingsPage user={user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/quiz" render={() => <QuizPage />} />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;