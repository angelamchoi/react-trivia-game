import { React, Component } from "react";
import { Link } from 'react-router-dom';
import quizService from "../../utils/quizService";
import "../QuizForm/QuizForm.css";

class QuizForm extends Component {
  constructor() {
    super();
    this.state = {
      quizData: [],
      act : 0, //starting at 0
      index : '',
  }
}



  handleSubmit= (e) => {
    e.preventDefault();
    let quizData = this.state.quizData;

    let question= this.refs.txtQuestion.value;
    let choice1= this.refs.txtChoice1.value;
    let choice2= this.refs.txtChoice2.value;
    let choice3= this.refs.txtChoice3.value;
    let choice4= this.refs.txtChoice4.value;
    let correctAnswer= this.refs.txtAnswer.value;

  if(this.state.act === 0)
  {
    let newQuiz = {
      "question": question,
      "choice1": choice1,
      "choice2": choice2,
      "choice3": choice3,
      "choice4": choice4,
      "correctAnswer": correctAnswer
    }
    quizData.push(newQuiz);
  }
  else
  {
    let index = this.state.index;
    quizData[index].question = question;
    quizData[index].choice1 = choice1;
    quizData[index].choice2 = choice2;
    quizData[index].choice3 = choice3;
    quizData[index].choice4 = choice4;
    quizData[index].correctAnswer = correctAnswer;
  }
    this.setState({
      quizData: quizData,
      act: 0
  })
    this.refs.myForm.reset();

  }

  handleEdit = (i) => {
    let quizData = this.state.quizData;
    this.refs.txtQuestion.value = quizData.question;
    this.refs.txtChoice1.value = quizData.choice1;
    this.refs.txtChoice2.value = quizData.choice2;
    this.refs.txtChoice3.value = quizData.choice3;
    this.refs.txtChoice4.value = quizData.choice4;
    this.refs.txtAnswer.value = quizData.answer;

    this.setState({
      quizData: quizData,
      act: 1,
      index: i 
    })
  }

  handleDelete = (i) =>{
    let quizData = this.state.quizData;
    quizData.splice(i,1);
    this.setState({
     quizData: quizData
    });
  } 


render() {
  let quizData = this.state.quizData;
  console.log(quizData);
  return (
    <div className = "form">
    <form ref="myForm">
      <h2>💡Create a Trivia Question!</h2>
      <label>Question:</label>
      <input type="text" name="txtQuestion" ref="txtQuestion" placeholder="question"/>
      <label>A:</label>
      <input type="text" name="txtChoice1" ref="txtChoice1" placeholder="choice 1" />
      <label>B:</label>
      <input type="text" name="txtChoice2" ref="txtChoice2" placeholder="choice 2" />
      <label>C:</label>
      <input type="text" name="txtChoice3" ref="txtChoice3" placeholder="choice 3" />
      <label>D:</label>
      <input type="text" name="txtChoice4" ref="txtChoice4" placeholder="choice 4"/>
      <label>Answer:</label>
      <input type="text" name="txtAnswer" ref="txtAnswer"placeholder="correct answer" />
      <button type="submit" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
    </form>
    <h2>💭My Trivia Questions</h2>
    <table>
      {quizData.map((quiz, i) => 
        <li key={i} className="myList">
        {i+1}. {quiz.question}, {quiz.choice1}, {quiz.choice2}, {quiz.choice3}, {quiz.choice4}, {quiz.correctAnswer}
        <button onClick={() => this.handleDelete(i)} className="btn btn-danger">Delete</button>
        <button onClick={() => this.handleEdit(i)} className="btn btn-info">Edit</button>
        </li>
)} 
    </table>
    </div>
  );
}
}
    
export default QuizForm;

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


