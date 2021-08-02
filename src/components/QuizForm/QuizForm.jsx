import { React, Component } from "react";
import { Link } from 'react-router-dom';
// import { createQuiz } from '../../utils/quizService';
import quizService from "../../utils/quizService";
import "../QuizForm/QuizForm.css";

class QuizForm extends Component {
  constructor() {
    super();
    this.state = {
      quizData: []
    // this.state = {
    //   question: "",
    //   choice1: "",
    //   choice2: "",
    //   choice3: "",
    //   choice4: "",
    //   answer: "",
    //   errMsg: "",
    // };
    // this.updatePage = props.match && props.match.params.id;
  }
}

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

// async updateQuiz() {
//     let quiz;
//     if (this.updatePage) {
//       quiz = await quizService.update({ ...this.state });
//     } else {
//       quiz = await quizService.create({ ...this.state });
//     }
//     return quiz;
// }

// handleSubmit = async (e) => {
//     e.preventDefault();
//     const quiz = await this.updateQuiz();
//     if (quiz) {
//       this.props.history.push("/");
//     } else {
//       window.confirm("quizUpdate failed");
//     }
//   };
// handleCreate = (e) => {
//   e.preventDefault()
//   let err = this.formHasErr()
//   if (err) {
//     this.setState({ errMsg: err })
//     return;
//   }
//   createQuiz(this.state)
//     .then((data) => {
//       this.props.createQuizUpdate(data)
//     })
//     .catch((err) => { console.log(err) })
// }

// handleChange = (e) => {
//   this.setState({
//     [e.target.name]: e.target.value,
//   });
// };

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


render() {
  let quizData = this.state.quizData;
  return (
    <div>
    <form ref="myForm">
      <label>Question</label>
      <input type="text" name="txtQuestion" ref="txtQuestion" />
      <label>Choice 1</label>
      <input type="text" name="textChoice1" ref="textChoice1" />
      <label>Choice 2</label>
      <input type="text" name="textChoice2" ref="textChoice2" />
      <label>Choice 3</label>
      <input type="text" name="textChoice3" ref="textChoice3" />
      <label>Choice 4</label>
      <input type="text" name="textChoice4" ref="textChoice4" />
      <label>Answer</label>
      <input type="text" name="txtAnswer" ref="txtAnswer" />
      <button type="submit" onClick={this.handleSubmit}>Submit</button>
    </form>
    <table>
      <tr>
        <th>Question</th>
        <th>Choice 1</th>
        <th>Choice 2</th>
        <th>Choice 3</th>
        <th>Choice 4</th>
        <th>Answer</th>
      </tr>
      {quizData.map((quiz, i) => 
        <tr key={i}>
          <td>{quiz.question}</td>
          <td>{quiz.choice1}</td>
          <td>{quiz.choice2}</td>
          <td>{quiz.choice3}</td>
          <td>{quiz.choice4}</td>
          <td>{quiz.correctAnswer}</td>
        </tr> )
    }
    </table>
    </div>
  )
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