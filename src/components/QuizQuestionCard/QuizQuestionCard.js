import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './QuizQuestionCard.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const QuizQuestionCard = (props) => {
    const {showCorrectAnswer,questionResultPopup} = props;
    const {options, question, correctAnswer} = props.question;
    
    return (
        <div className='quiz-question-card shadow rounded mt-5 p-4'>
            <div onClick={()=>showCorrectAnswer(correctAnswer)} className='text-success text-end pointer'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </div>
            <h5 className='mb-4 text-center'>{`Quiz ${props.questionIndex+1}: ${question}`}</h5>
            <div  className="row g-2 justify-content-center">                
                {
                    options.map((option,index)=><QuizOption 
                        option={option} 
                        key={index} 
                        questionIndex={props.questionIndex} 
                        questionResultPopup={questionResultPopup}
                        optionIndex={index}
                        correctAnswer={correctAnswer}
                        // singleToast={<ToastContainer></ToastContainer>}
                    ></QuizOption>)
                }
            </div>
                {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default QuizQuestionCard;