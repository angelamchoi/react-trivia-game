import React, { Component } from "react";
import QuizForm from '../../components/QuizForm/QuizForm';
import quizService from "../../utils/quizService";
import './CreatePage.css'

export default class CreatePage extends React.Component {
  state = {
    quizzes: [],
    selectedQuiz: {},
    isEditing: false
  };

  addQuiz = (quiz) => 
    this.setState({ quizzes: [...this.state.quizzes, quiz] });

  handleEditClicked = (selectedQuiz) =>
    this.setState({ selectedQuiz, isEditing: true});

  handleQuizUpdate = (updatedQuiz) => {
    const quizzes = this.quizzes.map((quiz) => {
      if (quiz.a === updatedQuiz) {
        return updatedQuiz;
      }
      return quiz;
    });

    this.setState({ quizzes, isEditing: false });
  };

  handleDelete = async (e) => {
    await quizService.delete(this.state.quiz._id);
    this.props.handleUpdateQuiz();
    this.props.history.push("/");
  };

  render() {
    const { quizzes, selectedQuiz, isEditing } = this.state;
    return (
      <div>
        <QuizForm
          quiz={selectedQuiz}
          addQuiz={this.addQuiz}
          isEditing={isEditing}
        />
        {quizzes.map((quiz, index) => {
          const currentQuiz = quiz;
          return (
            <>
              <h2>{quiz.id}</h2>
              <button onClick={() => this.handleEditClicked(currentQuiz)}>
                Edit
              </button>
            </>
          );
        })}
      </div>
    );
  }
}

// class CreatePage extends Component {
//     constructor() {
//       super();
//       this.state = {
//         question: "",
//         choice1: "",
//         choice2: "",
//         choice3: "",
//         choice4: "",
//         correctAnswer: "",
//       };
//     }
//     render() {
//         const { quiz } = this.state;
//         return (
//             <div className="Quizform">
//                 <h1> 💡Create a Trivia Question</h1>
//                 <div className="col md-3">
//                 <ul className="list-group">
//                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                         <QuizForm
//                         />
//                     </li>
//                 </ul>
//             </div>
//           </div>
//         );
//     }
// }

// export default CreatePage;
