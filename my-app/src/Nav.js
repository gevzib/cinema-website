import React from 'react';
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './Home';
import AddFilm from './AddFilm';

export default () => {
    let urlParams = new URLSearchParams(window.location.search);
    return (
        <nav>
            <h4>Welcome to {urlParams.get("location")}, {urlParams.get("name")}!</h4>
            <ul>
                <li><Link to={'/'}>Homepage</Link></li>
                <li><Link to={'/addfilm'}>Add Film Listing</Link></li>
                <li><Link to={'/films'}>Current Films</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
    )
};