import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css';

const Home = () => {
    const quizItems = useLoaderData().data;
    // const [singleExam,setSingleExam] = useState()
    // const handleToOpenExam = id =>{

    // }
    return (
        <>
            <section className='hero-section py-5'>
                <div className="container text-center">
                    <h1 className='text-light'>Front-end Development Exam</h1>
                </div>
            </section>
            <section className='py-5 my-4'>
                <div className="container">
                    <div className="row quiz-data g-4">
                        {
                            quizItems.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;