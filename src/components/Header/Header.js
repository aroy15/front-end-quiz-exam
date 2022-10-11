import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">Front-end's Quiz</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className={({isActive})=> isActive?'nav-active nav-link':'nav-link'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/statistics' className={({isActive})=> isActive?'nav-active nav-link':'nav-link'}>Statistics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/blog' className={({isActive})=> isActive?'nav-active nav-link':'nav-link'}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;