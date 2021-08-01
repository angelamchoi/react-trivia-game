import React, { Component } from "react";
import QuizForm from '../../components/QuizForm/QuizForm';
import quizService from "../../utils/quizService";
import './CreatePage.css'


class CreatePage extends Component {
    constructor() {
      super();
      this.state = {
        category: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        correctAnswer: "",
      };
    }

    render() {
        const { quiz } = this.state;
        return (
           
            <div className="Quizform">
                <h1> 💡Create a Trivia Question!</h1>
                <div className="col md-3">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <QuizForm
                        />
                    </li>
                </ul>
            </div>
          </div>
        );
    }
}

export default CreatePage;
