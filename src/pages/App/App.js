import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import QuizPage from "../QuizPage/QuizPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import ResultPage from "../ResultPage/ResultPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import FavsPage from "../FavsPage/FavsPage";
import CreatePage from "../CreatePage/CreatePage";
import NavBar from "../../components/NavBar/NavBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import Footer from "../../components/Footer/Footer";
import userService from "../../utils/userService";
import quizService from "../../utils/quizService";



class App extends Component {
  constructor() {
  super();
  this.state = {
    user: userService.getUser(),
  };
}
  handleLogout = () => {
      userService.logout();
      this.setState({user: null})
}
  handleSignupOrLogin = () =>{
      this.setState({user: userService.getUser()});
}

render() {
  const { user, cards, setCards } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
      </header>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage user={this.state.user} />}
        />
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
        <Route exact path="/logout" render={() => <LogoutPage />} />
        <Route exact path="/mytrivias" render={() => <CreatePage />} />
        <Route exact path="/play" render={() => <QuizPage />} />
        <Route exact path="/favs" render={() => <FavsPage />} />
      </Switch>
    </div>
  );
}
}

export default App;