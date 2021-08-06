import React, { Component } from "react";
import { Link } from "react-router-dom";
import quizService from "../../utils/quizService";
import "../QuizForm/QuizForm.css";

class QuizForm extends Component {
  constructor() {
    super();
    this.state = {
      a: "",
      b: "",
      c: "",
      d: "",
      question: "",
      answer: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // clear = () => this.setState(initialState);

  handleSubmit = async (e) => {
    e.preventDefault();
    const newQuiz = await quizService.create({ ...this.state });
    console.log(newQuiz);
    this.props.history.push("/mytrivias");
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      const quiz = await quizService.getOne(this.props.match.params.id);
      this.setState(quiz);
      console.log(quiz);
    }
  }

  render() {
    const { a, b, c, d, question, answer } = this.state;
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e)}>
        {/* <div className="Form"> */}
          <h2>🔮Create a trivia question</h2>
       
            <div className="form-group">
          
                <div className="col-md-3">
                  <label>
                    Question:
                    <input
                      type="textarea"
                      name="question"
                      value={question}
                      placeholder="How many moons are on Mars?"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    A:
                    <input
                      type="text"
                      name="a"
                      value={a}
                      placeholder="5"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    B:
                    <input
                      name="b"
                      value={b}
                      placeholder="16"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    C:
                    <input
                      name="c"
                      value={c}
                      placeholder="2"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    D:
                    <input
                      value={d}
                      name="d"
                      placeholder="1"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Answer:
                    <input
                      value={answer}
                      name="answer"
                      placeholder="2"
                      onChange={this.handleChange}
                    />
                  </label>

                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleSubmit}
                    >
                      {this.props.isEditing ? "Update Quiz" : "Create"}
                    </button>
                  </div>
                </div>
              </div>
          
        {/* </div> */}
      </form>
    );
  }
}

export default QuizForm;
