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
