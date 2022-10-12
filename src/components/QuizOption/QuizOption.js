import React from 'react';
import './QuizOption.css'
const QuizOption = ({option,questionIndex}) => {
    return (
        <div className="col-md-6">
            <label className='option-item d-flex align-items-center gap-2 py-4 px-3 border border-success rounded pointer'>
                <input type="radio" name={`quiz-${questionIndex}`} />
                <span className='text-success fw-bold'>{option}</span>
            </label>
        </div>
        
    );
};

export default QuizOption;