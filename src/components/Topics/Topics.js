import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Home = () => {
    const quizItems = useLoaderData().data;
    
    return (
        <section className='py-5 my-4'>
            <div className="container">
                <div className="row quiz-data g-4">
                    {
                        quizItems.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;