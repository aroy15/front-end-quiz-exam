import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestionCard from '../QuizQuestionCard/QuizQuestionCard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Quiz = () => {
    const {questions,name,id} = useLoaderData().data;
    
    // React Toast: checking answers
    const questionResultPopup = (correctAnswer, option, questionIndex) =>{
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
    // React Toast: show correct answer
    const showCorrectAnswer = (correctAnswer) =>{
        toast.success(`Correct Answer is: ${correctAnswer}`,{
            position: "top-center",
        })
    }
    return (
        <section className='py-5'>
           <div className="container">
                <h1 className='text-center text-success'>Quiz of {name}</h1>
                {
                    questions.map((question, index) => <QuizQuestionCard 
                    question={question} 
                    key={question.id} 
                    questionIndex={index}
                    questionResultPopup={questionResultPopup}
                    showCorrectAnswer={showCorrectAnswer}
                    ></QuizQuestionCard>)
                }
                <ToastContainer></ToastContainer>
           </div>
        </section>
    );
};

export default Quiz;