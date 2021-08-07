import React, { Component } from "react";
import quizService from "../../utils/quizService";
import "../QuizList/QuizList.css";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz: [],
    };
  }

  // componentDidUpdate(prevProps, PrevState) {
  //   if (this.props.quiz) {
  //     if (prevProps.quiz.id !== this.props.quiz.id) {
  //       this.setState({ ...this.props.quiz });
  //     }
  //   }
  // }


  handleDelete = async (id) => {
    console.log("handleDelete", id);
    const deletedQuiz = await quizService.delete(id);
    console.log(deletedQuiz);
    await this.props.getQuiz();
  };

  handleQuizUpdate = async (updatedQuiz) => {
    const quizzes = await quizService.update(updatedQuiz);
    this.setState({
      quizzes: quizzes,
    });
  };


  render() {
    return (
      <div>
        <h1> 🔮my trivias</h1>
        <div className="card-list">
          <div className="card-grid">
            {this.props.quizzes.map((quiz, i) => (
              <div className="container">
                <div className="card-list">
                  <div>Question: {quiz.question} </div>
                  <div>A: {quiz.a} </div>
                  <div>B: {quiz.b} </div>
                  <div>C: {quiz.c} </div>
                  <div>D: {quiz.d} </div>
                  <div>Answer: {quiz.answer} </div>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(quiz._id)}
                  >
                    {" "}
                    X
                  </button>

                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => this.handleQuizUpdate}
                  >
                    {" "}
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default QuizList;
