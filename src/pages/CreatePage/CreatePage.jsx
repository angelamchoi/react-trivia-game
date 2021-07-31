import React from 'react';
import QuizForm from '../../components/QuizForm/QuizForm';
import './CreatePage.css'


const CreatePage = (props) => {
    return (
        <div>
            <h1> 💡Create a Trivia Question!</h1>
            <QuizForm />
        </div>
    
    );
    };

export default CreatePage;