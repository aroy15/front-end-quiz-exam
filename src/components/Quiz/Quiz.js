import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const loadQuizQuestions = useLoaderData().data;
    return (
        <div>
            this is single exam {loadQuizQuestions.name}
        </div>
    );
};

export default Quiz;