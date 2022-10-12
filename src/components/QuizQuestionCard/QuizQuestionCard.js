import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './QuizQuestionCard.css'

const QuizQuestionCard = (props) => {
    const {options, question} = props.question;
    return (
        <div className='quiz-question-card shadow rounded mt-5 p-4'>
            <h5 className='mb-4 text-center'>{`Quiz ${props.questionIndex+1}: ${question}`}</h5>
            <div className="row g-2 justify-content-center">                
                {
                    options.map((option,index)=><QuizOption option={option} key={index} questionIndex={props.questionIndex}></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizQuestionCard;