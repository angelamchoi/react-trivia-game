import { React, Component } from "react";
import { Link } from 'react-router-dom';
import "../QuizForm/QuizForm.css";

class QuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      answer: "",
    };
  }

handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
// handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await userService.signup(this.state);
//       this.props.handleSignupOrLogin()
//       this.props.history.push('/');
//     } catch (err) {
//       this.props.updateMessage(err.message);
//     }
//   }


render() {
    return (
      <div className="QuizForm-body">
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="question" value={this.state.question} name="question" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice1" className="form-control" placeholder="choice 1" value={this.state.email} name="choice1" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice2" className="form-control" placeholder="choice 2" value={this.state.password} name="choice2" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice3" className="form-control" placeholder="Choice 3" value={this.state.passwordConf} name="choice3" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice4" className="form-control" placeholder="Choice 4" value={this.state.passwordConf} name="choice4" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="answer" className="form-control" placeholder="answer" value={this.state.passwordConf} name="answer" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" >Create</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default QuizForm;