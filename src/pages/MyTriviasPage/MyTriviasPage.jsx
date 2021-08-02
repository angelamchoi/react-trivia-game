import React, { Component } from "react";
import QuizForm from '../../components/QuizForm/QuizForm';
import quizService from "../../utils/quizService";



class MyTriviasPage extends Component {
    constructor() {
      super();
      this.state = {
        quiz: {},
        question: {},
        choice1: {},
        choice2: {},
        choice3: {},
        choice4: {},
        correctAnswer: {},
        };
    }
    handleDelete = async (e) => {
        await quizService.delete(this.state.quiz._id);
        this.props.history.push("/");
};

    
    render() {
        const { quiz } = this.state;
        return (
            <div>
            <div className="MyTrivias">
                <h1> My Trivias! 💎</h1>
            </div>
            <div className="card text-dark bg-info mb-3">
                <div className="card-header">
                    <div className="card-body">
                        <h5 className="card-title">Category: {quiz.category}</h5>
                        <p className="card-text">Question: {quiz.question}</p>
                        <p className="card-text">A: {quiz.choice1}</p>
                        <p className="card-text">B: {quiz.choice1}</p>
                        <p className="card-text">C: {quiz.choice1}</p>
                        <p className="card-text">D: {quiz.choice1}</p>
                        <p className="card-text">Answer: {quiz.correctAnswer}</p>
                    </div>
            <div className="btn-toolbar">
                <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={this.handleDelete}
                    >
                Delete
                </button>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default MyTriviasPage;

