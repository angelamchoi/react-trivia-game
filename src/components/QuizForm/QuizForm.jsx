import { React, Component } from "react";
import { Link } from 'react-router-dom';
import quizService from "../../utils/quizService";
import "../QuizForm/QuizForm.css";

class QuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",  
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      answer: "",
    };
    this.updatePage = props.match && props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

async updateQuiz() {
    let quiz;
    if (this.updatePage) {
      quiz = await quizService.update({ ...this.state });
    } else {
      quiz = await quizService.create({ ...this.state });
    }
    return quiz;
}

handleSubmit = async (e) => {
    e.preventDefault();
    const quiz = await this.updateQuiz();
    if (quiz) {
      this.props.history.push("/");
    } else {
      window.confirm("quizUpdate failed");
    }
  };

render() {
    return (
      <div className="QuizForm-body">
        <form>
          <div className ="form-horizontal">
        <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="category" value={this.state.category} name="category" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="question" value={this.state.question} name="question" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice1" className="form-control" placeholder="choice 1" value={this.state.choice1} name="choice1" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice2" className="form-control" placeholder="choice 2" value={this.state.choice2} name="choice2" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice3" className="form-control" placeholder="choice 3" value={this.state.choice3} name="choice3" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="choice4" className="form-control" placeholder="choice 4" value={this.state.choice4} name="choice4" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="answer" className="form-control" placeholder="answer" value={this.state.answer} name="answer" onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" >Create</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
      </div>
    </form>
  </div>
    );
  }
}

export default QuizForm;