import { React, Component } from "react";
import { Link } from 'react-router-dom';
// import { createQuiz } from '../../utils/quizService';
import quizService from "../../utils/quizService";
import "../QuizForm/QuizForm.css";

class QuizForm extends Component {
  constructor() {
    super();
    this.state = {
      quizData: [],
      act : 0, //starting at 0
      index : ''
  }
}



handleSubmit= (e) => {
  e.preventDefault();
  let quizData = this.state.quizData;
  let question= this.refs.txtQuestion.value;
  let choice1= this.refs.textChoice1.value;
  let choice2= this.refs.textChoice2.value;
  let choice3= this.refs.textChoice3.value;
  let choice4= this.refs.textChoice4.value;
  let correctAnswer= this.refs.txtAnswer.value;

  let newQuiz={
    "question": question,
    "choice1": choice1,
    "choice2": choice2,
    "choice3": choice3,
    "choice4": choice4,
    "correctAnswer": correctAnswer
  }
  quizData.push(newQuiz);

  this.setState({
    quizData: quizData
})
  this.refs.myForm.reset();

}


// handleEdit(i) {
//   let quizData = this.state.quizData;
//   this.refs.txtQuestion.value = quizData.Question;
//   this.refs.txtAnswer.value = quizData.Answer;
//   this.refs.txtChoice1.value = quizData.Choice1;
//   this.refs.txtChoice2.value = quizData.Choice2;
//   this.refs.txtChoice3.value = quizData.Choice3;
//   this.refs.txtChoice4.value = quizData.Choice4;

//   this.setState({
//     quizData: quizData,
//     act:1,
//     index: i 
//   })
// }


 handleDelete = (i) =>{
   let quizData = this.state.quizData;
   quizData.splice(i,1);
   this.setState({
     quizData: quizData
   });
 }

render() {
  let quizData = this.state.quizData;
  return (
    <div className = "form">
    <form ref="myForm">
      <h2>💡Create a Trivia Question!</h2>
      <label>Question:</label>
      <input type="text" name="txtQuestion" ref="txtQuestion" placeholder="question"/>
      <label>A:</label>
      <input type="text" name="textChoice1" ref="textChoice1" placeholder="choice 1" />
      <label>B:</label>
      <input type="text" name="textChoice2" ref="textChoice2" placeholder="choice 2" />
      <label>C:</label>
      <input type="text" name="textChoice3" ref="textChoice3" placeholder="choice 3" />
      <label>D:</label>
      <input type="text" name="textChoice4" ref="textChoice4" placeholder="choice 4"/>
      <label>Answer:</label>
      <input type="text" name="txtAnswer" ref="txtAnswer"placeholder="correct answer" />
      <button type="submit" onClick={this.handleSubmit}>Submit</button>
    </form>
        <h2>💭My Trivia Questions</h2>
      <pre>
        {quizData.map((quiz, i) => 
        <li key={i} className="myList">
        {i+1}. {quiz.question}, {quiz.choice1}, {quiz.choice2}, {quiz.choice3}, {quiz.choice4}, {quiz.correctAnswer}
        <button onClick={(e) => this.handleDelete(i)}>Delete</button>
        <button onClick={(e) => this.handleDelete(i)}>Edit</button>
        </li>
        )}
      </pre>
    </div>
  );
}
}
    


// formHasErr = () => {
//   // Check if any empty boxes
//   if (!
//     (this.state.question &&
//       this.state.choice1 &&
//       this.state.choice2 &&
//       this.state.choice3 &&
//       this.state.choice4 &&
//       this.state.correctAnswer)
//   ) return "Please Ensure All Boxes are Filled"
  
//   this.setState({
//     errMsg: ''
//   })

//   return false;
// }

// render() {

//   // let errMsg = this.state.errMsg ? <p className="Form-Error">{this.state.errMsg}</p> : null
//     return (
//       <div className="QuizForm-body">
//         <form className="Create-Quiz-Form" onSubmit={this.handleCreate}>
//           <div className ="form-horizontal">
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="text" className="form-control" placeholder="question" value={this.state.question} name="question" onChange={(e) => this.handleChange(e)} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="choice1" className="form-control" placeholder="choice 1" value={this.state.choice1} name="choice1" onChange={(e) => this.handleChange(e)} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="choice2" className="form-control" placeholder="choice 2" value={this.state.choice2} name="choice2" onChange={(e) => this.handleChange(e)} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="choice3" className="form-control" placeholder="choice 3" value={this.state.choice3} name="choice3" onChange={(e) => this.handleChange(e)} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="choice4" className="form-control" placeholder="choice 4" value={this.state.choice4} name="choice4" onChange={(e) => this.handleChange(e)} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="answer" className="form-control" placeholder="answer" value={this.state.answer} name="answer" onChange={(e) => this.handleChange(e)} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12 text-center">
    
//              <button className="btn btn-default" >Create</button>&nbsp;&nbsp; 
//               <Link to='/'>Cancel</Link>
//             </div>
//           </div>
//       </div>
//     </form>
//   </div>
//     );
//   }
// }


export default QuizForm;