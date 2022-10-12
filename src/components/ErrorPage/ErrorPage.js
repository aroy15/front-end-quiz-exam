import React from 'react';
import Header from '../Header/Header';
import './ErrorPage.css';
import img_404 from '../../img_404.webp';

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <section className='py-5 errorPage text-center'>
                <div className="container">                    
                    <h2 className='text-danger fs-1'>The page not found, getting 404.</h2>
                    <p className='fs-4 pt-2'>Please find your page on the menu bar.</p>
                    <div className='d-flex justify-content-center'>
                        <img src={img_404} alt="404" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;