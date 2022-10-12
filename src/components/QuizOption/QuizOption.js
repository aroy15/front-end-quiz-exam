import React from 'react';
import './QuizOption.css'
const QuizOption = ({option,optionIndex, questionIndex, questionResultPopup, correctAnswer}) => {
    return (
        <div className="col-md-6 d-flex">
            <label onClick={()=>questionResultPopup(correctAnswer, option, optionIndex)} className='option-item d-flex align-items-center gap-2 py-4 px-3 border border-success rounded pointer w-100'>
                <input type="radio" name={`quiz-${questionIndex}`} />
                <span className='text-success fw-bold'>{option}</span>
            </label>
        </div>
    );
};

export default QuizOption;
// onClick={()=>questionResultPopup()}