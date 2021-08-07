import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import QuizPage from "../../pages/QuizPage/QuizPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div className="container-fluid">
      <h1> quizzify</h1>
      <h3> gamifying the learning experience </h3>
      <br></br>
      <div className="row">
        <div className="col-md-12">
          <h2>😃play</h2>
          <p>10 trivia questions and select level of difficulty</p>
          <h2>🔮create</h2>
          <p>create your own trivia quiz</p>
          <h2>📚learn</h2>
          <p> choose from 20+ trivia categories </p>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
