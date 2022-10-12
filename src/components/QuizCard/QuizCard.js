import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({quiz}) => {
    const {id,name,logo,total} = quiz;

    return (
        <div className="col-xl-3 col-lg-6">
            <div className='quiz-card rounded shadow p-2'>
                <img className='img-fluid rounded' src={logo} alt={name} />
                <div className="d-flex justify-content-between mt-3">
                    <h4 className='text-success text-center'>{name}</h4>
                    <div>
                        {/* <button className='btn btn-success'>Start Practice</button> */}
                        <Link to={`quiz/${id}`} className='btn btn-success'>Start Practice</Link>
                    </div>
                </div>
            </div>              
        </div>
    );
};

export default QuizCard;