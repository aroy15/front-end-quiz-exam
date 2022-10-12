import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestionCard from '../QuizQuestionCard/QuizQuestionCard';

const Quiz = () => {
    const {questions,name,id} = useLoaderData().data;
    return (
        <section className='py-5'>
           <div className="container">
                <h1 className='text-center text-success'>Quiz of {name}</h1>
                {
                    questions.map((question, index) => <QuizQuestionCard question={question} key={question.id} questionIndex={index}></QuizQuestionCard>)
                }
           </div>
        </section>
    );
};

export default Quiz;