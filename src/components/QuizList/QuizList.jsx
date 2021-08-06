import React, { Component } from "react";
import quizService from "../../utils/quizService";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      quiz: [],
    };
  }

  async componentDidMount() {
    const quizzes = await quizService.index();
    console.log(quizzes);
    this.setState({ quizzes });
  }

  componentDidUpdate(prevProps, PrevState) {
    if (this.props.quiz) {
      if (prevProps.quiz.id !== this.props.quiz.id) {
        this.setState({ ...this.props.quiz });
      }
    }
  }

  handleDelete = async (id) => {
    const newQuiz = await quizService.delete(id);
    this.setState({
      quizzes: newQuiz,
    });
    console.log(newQuiz);
  };

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
    return (
      <div>
        <h1> 🔮My Trivias!</h1>
        <div className="card">
          <div className="card-grid">
            {this.state.quizzes.map((quiz, i) => (
              <div className="container">
                <div className="card">
                <div>{quiz.a} </div>
                <div>{quiz.b} </div>
                <div>{quiz.c} </div>
                <div>{quiz.d} </div>
                <div>{quiz.question} </div>
                <div>{quiz.answer} </div>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={this.handleDelete}
                >
                  {" "}
                  X
                </button>
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handleEditedClicked}
                >
                  {" "}
                  Edit
                </button>
              </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
      
    );
  }
}

export default QuizList;

// import React, { Component } from "react";
// import quizService from "../../utils/quizService";

// class QuizList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       quizzes: [],
//     };
//   }

//   async componentDidMount() {
//     const quizzes = await quizService.index();
//     console.log(quizzes);
//     this.setState({ quizzes });
//   }

//   handleDelete = async (id) => {
//     const newQuiz = await quizService.deleteOne(this.props.quiz._id);
//     this.props.setQuiz(newQuiz);
//   };

// clear = () => this.setState(initialState);

//   render() {
//     return (
//       <div>
//         <h1> 🔮My Trivias!</h1>
//         <div className="card">
//           <div className="card-grid">
//             {this.state.quizzes.map((quiz, i) => (
//               <div className="container">
//                 <div>{quiz.a} </div>
//                 <div>{quiz.b} </div>
//                 <div>{quiz.c} </div>
//                 <div>{quiz.d} </div>
//                 <div>{quiz.question} </div>
//                 <div>{quiz.answer} </div>
//                 <button
//                   type="submit"
//                   className="btn btn-danger"
//                   onClick={this.handleDelete}
//                 >
//                   {" "}
//                   X
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-info"
//                   onClick={this.handleSubmit}
//                 >
//                   {" "}
//                   Edit
//                 </button>
//               </div>
//             ))}
//             ;
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
