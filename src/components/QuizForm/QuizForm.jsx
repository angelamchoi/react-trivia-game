import  React, {Component } from "react";
import { Link } from 'react-router-dom';
import quizService from "../../utils/quizService";
import "../QuizForm/QuizForm.css";

const initialState = {
  a: "",
  b: "",
  c: "",
  d: "",
  question: "",
  answer: "",
};

export default class QuizForm extends React.Component {
  state = this.props.quiz || initialState;

  componentDidUpdate(prevProps, PrevState) {
    if (this.props.quiz) {
      if (prevProps.quiz.id !== this.props.quiz.id) {
        this.setState({ ...this.props.quiz });
      }
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  clear = () => this.setState(initialState);

handleSubmit = async (e) => {
  e.preventDefault();
    try {
      const { isEditing, addQuiz, onQuizUpdate } = this.props;
      if (isEditing) {
        const updatedQuiz = await quizService.update({ ...this.state });
      } else {
          const newQuiz = await quizService.create({ ...this.state });
      }
    } catch (error) {
      console.log(error);
    }

    this.clear();
  };

  render() {
    const { a, b, c, d, question, answer } = this.state;
    return (
      <form>
        <div className ="Form">
        <h2>🔮Create a trivia question</h2>
          <label>
            Question:
            <input name="question" value={question} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            A:
            <input name="a" value={a} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            B:
            <input name="b" value={b} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            C:
            <input name="c" value={c} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            D:
            <input value={d} name="d" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Answer:
            <input value={answer} name="answer" onChange={this.handleChange} />
          </label>
        </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              {this.props.isEditing ? "Update Quiz" : "Create"}
            </button>
          </div>
      </form>
    );
  }
}

//   handleSubmit= (e) => {
//     e.preventDefault();
//     let quizData = this.state.quizData;

//     let question= this.txtQuestion.value;
//     let choice1= this.txtChoice1.value;
//     let choice2= this.txtChoice2.value;
//     let choice3= this.txtChoice3.value;
//     let choice4= this.txtChoice4.value;
//     let correctAnswer= this.txtAnswer.value;

//   if(this.state.act === 0)
//   {
//     let newQuiz = {
//       "question": question,
//       "choice1": choice1,
//       "choice2": choice2,
//       "choice3": choice3,
//       "choice4": choice4,
//       "correctAnswer": correctAnswer
//     }
//     quizData.push(newQuiz);
//   }
//   else
//   {
//     let index = this.state.index;
//     quizData[index].question = question;
//     quizData[index].choice1 = choice1;
//     quizData[index].choice2 = choice2;
//     quizData[index].choice3 = choice3;
//     quizData[index].choice4 = choice4;
//     quizData[index].correctAnswer = correctAnswer;
//   }
//     this.setState({
//       quizData: quizData,
//       act: 0
//   })
//     this.refs.myForm.reset();

//   }

//   handleEdit = (i) => {
//     let quizData = this.state.quizData;
//     this.txtQuestion.value = quizData.question;
//     this.txtChoice1.value = quizData.choice1;
//     this.txtChoice2.value = quizData.choice2;
//     this.txtChoice3.value = quizData.choice3;
//     this.txtChoice4.value = quizData.choice4;
//     this.txtAnswer.value = quizData.answer;

//     this.setState({
//       quizData: quizData,
//       act: 1,
//       index: i 
//     })
//   }

//   handleDelete = (i) =>{
//     let quizData = this.state.quizData;
//     quizData.splice(i,1);
//     this.setState({
//      quizData: quizData
//     });
//   } 


// render() {
//   let quizData = this.state.quizData;
//   console.log(quizData);
//   return (
//     <div className = "form">
//     <form ref="myForm">
//       <div className ="card">
//         <div className = "card-header">
//       <label>Question:</label>
  
//       <input type="textarea" name="txtQuestion" ref="txtQuestion" placeholder="enter question here" />
//       <label>A:</label>
//       <input type="text" name="txtChoice1" ref="txtChoice1" placeholder="choice 1" />
//       <label>B:</label>
//       <input type="text" name="txtChoice2" ref="txtChoice2" placeholder="choice 2" />
//       <label>C:</label>
//       <input type="text" name="txtChoice3" ref="txtChoice3" placeholder="choice 3" />
//       <label>D:</label>
//       <input type="text" name="txtChoice4" ref="txtChoice4" placeholder="choice 4"/>
//       <label>Answer:</label>
//       <input type="text" name="txtAnswer" ref="txtAnswer"placeholder="correct answer" />
//       <button type="submit" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
//       </div>
//       </div>
//     </form>
  
//     <h2>💭My Trivia Questions</h2>
//     <div className ="card">
//       <div className="card-grid">
//       {quizData.map((quiz, i) => 
//         <div className="card" key={i} className="myList">
//         {i+1}. {quiz.question}, {quiz.choice1}, {quiz.choice2}, {quiz.choice3}, {quiz.choice4}, {quiz.correctAnswer}
//         <button onClick={() => this.handleDelete(i)} className="btn btn-danger">Delete</button>
//         <button onClick={() => this.handleEdit(i)} className="btn btn-info">Edit</button>
//         </div>
        
        
//         )} 
//       </div>
//  </div> 
//  </div>
    
//   );
// }
// }
// export default QuizForm;
