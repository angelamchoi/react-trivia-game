import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import QuizPage from '../../pages/QuizPage/QuizPage'
import SignupPage from '../../pages/SignupPage/SignupPage'
import './HomePage.css'

const HomePage = (props) => {
return (
    <div className='container-fluid'>
        <h1> quizzify</h1>
        <h3> gamifying the learning experience. </h3>
        <button type="button" class="btn btn-primary">Get Started</button>
       <div className ="row">
           <div className="col-md-4">
                <h2> play</h2>
                <h2> learn</h2>
                <h2> create</h2>
            </div>
        </div>
    </div>

);
};


export default HomePage;