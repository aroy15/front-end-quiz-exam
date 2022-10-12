import React from 'react';
import './QuizOption.css'
const QuizOption = ({option,optionIndex, questionIndex, questionResultPopup, singleToast}) => {
    return (
        <div className="col-md-6">
            <label onClick={()=>questionResultPopup(option,optionIndex)} className='option-item d-flex align-items-center gap-2 py-4 px-3 border border-success rounded pointer'>
                <input type="radio" name={`quiz-${questionIndex}`} />
                <span className='text-success fw-bold'>{option}</span>
            </label>
            {/* {singleToast} */}
        </div>
    );
};

export default QuizOption;
// onClick={()=>questionResultPopup()}