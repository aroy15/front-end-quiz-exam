import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './QuizQuestionCard.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestionCard = (props) => {
    const {options, question, correctAnswer} = props.question;
    console.log(question)
    // React Toast
    const questionResultPopup = (option, questionIndex) =>{
        if(correctAnswer===option){
            toast.success(`Correct Answer 😃`,{
                position: "top-center",
                toastId: `option-${questionIndex}`
            })
        }else{
            toast.warning(`Incorrect Answer 😥`,{
                position: "top-center",
                toastId: `option-${questionIndex}`
            })
        }
    }
    return (
        <div className='quiz-question-card shadow rounded mt-5 p-4'>
            <h5 className='mb-4 text-center'>{`Quiz ${props.questionIndex+1}: ${question}`}</h5>
            <div  className="row g-2 justify-content-center">                
                {
                    options.map((option,index)=><QuizOption 
                        option={option} 
                        key={index} 
                        questionIndex={props.questionIndex} 
                        questionResultPopup={questionResultPopup}
                        optionIndex={index}
                        // singleToast={<ToastContainer></ToastContainer>}
                    ></QuizOption>)
                }
            </div>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizQuestionCard;