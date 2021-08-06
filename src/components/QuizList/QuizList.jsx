import React , {Component} from "react";
import quizService from "../../utils/quizService";

class QuizList extends Component {
    constructor() {
    super();
    this.state = {
    quizzes: [],
    };
  }

async componentDidMount() {
    const quizzes = await quizService.index();
    console.log(quizzes);
    this.setState({quizzes});
    
}

  handleDelete = async (id) => {
    const deletedQuiz = await quizService.delete(id);
    this.setState({
      quizzes: deletedQuiz,
    });
    console.log(deletedQuiz);
  }
      
render () {
  return (
    <div>
      <h1> 🔮My Trivias!</h1>
      <div className="card">
        <div className="card-grid">
          {this.state.quizzes.map((quiz, i) => (
            <div className="container">
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
                  onClick={this.handleSubmit}
                >
                  {" "}
                  Edit
                </button>
            </div>
        
          ))}
          ;
        </div>
      </div>
    </div>
  );
};
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


