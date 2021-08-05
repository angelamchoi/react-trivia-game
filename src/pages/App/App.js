import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import QuizPage from "../QuizPage/QuizPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import CreatePage from "../CreatePage/CreatePage";
import QuizList from "../../components/QuizList/QuizList";
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
    quizzes: [],
    quiz: [],
    selectedQuiz: {},
    isEditing: false
  };
}
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
}

  async componentDidMount() {
    await this.getQuiz();
    if (this.state.user) {
    this.setState({ quiz: this.state.user.quizzes });
  }
}

  getQuiz = async () => {
    const quizzes = await quizService.index();
    this.setState({ quizzes });
};

  handleSignupOrLogin = () =>{
    this.setState({user: userService.getUser()});
}

  addQuiz = (quiz) => 
    this.setState({ quizzes: [...this.state.quizzes, quiz] });

  handleEditClicked = (selectedQuiz) =>
    this.setState({ selectedQuiz, isEditing: true });

  handleQuizUpdate = (updatedQuiz) => {
    const quizzes = this.quizzes.map((quiz) => {
      if (quiz.a === updatedQuiz) {
        return updatedQuiz;
      }
      return quiz;
    });

    this.setState({ quizzes, isEditing: false });
  };

render() {
  const { quizzes, selectedQuiz, isEditing } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar 
          user={this.state.user} 
          handleLogout={this.handleLogout} 
        />
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
          <Route
              exact
              path="/create"
              render={({ history }) => (
                <QuizForm
                  quiz={selectedQuiz}
                  addQuiz={this.addQuiz}
                  isEditing={isEditing}
                />
              )}
          />
                
        <Route exact path="/logout" render={() => <LogoutPage />} />
        <Route exact path="/create" render={() => <CreatePage />} />
        <Route exact path="/play" render={() => <QuizPage />} />
        <Route exact path="/mytrivias" render={() => <QuizList />} />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default App;