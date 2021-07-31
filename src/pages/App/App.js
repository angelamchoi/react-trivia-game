import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import QuizPage from "../../pages/QuizPage/QuizPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
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
    handleLogout = () => {
        userService.logout();
        this.setState({user: null})
  }
    handleSignupOrLogin = () =>{
        this.setState({user: userService.getUser()});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        </header>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
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
            path="/logout"
            render={() => (
              <LogoutPage
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
//   render() {
//     const { user } = this.state;
//     return (
//          <div className="App">
//             <header className="container-fluid">
//            <NavBar user={user} handleLogout={this.handleLogout} />
//          </header>
//          <main class="container-fluid">
//          <Switch>
//           <Route exact path='/' render={() =>
//             <HomePage
//               user={user}
//               handleLogout={this.handleLogout}
//             />
//           }/>
//           <Route exact path='/settings' render={() =>
//             <SettingsPage
//             />
//           }/>
//           <Route exact path='/signup' render={({ history }) =>
//             <SignupPage
//               history={history}
//               handleSignupOrLogin={this.handleSignupOrLogin}
//             />
//           }/>
//           <Route exact path='/login' render={({history}) =>
//             <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>
//           }/>
//           <Route exact path='/quiz' render={() =>
//             userService.getUser() ?
//             <QuizPage
//             user ={user}
//             />
//             :
//             <Redirect to='/login'/>
//           }/>
//         </Switch>
//         </main>
//         <Footer />
//        </div>
//    );
//   }
// }

export default App;