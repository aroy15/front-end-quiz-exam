import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light py-4 shadow">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-success" to='/'>Front-end's Quiz</Link>
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
        </header>
    );
};

export default Header;