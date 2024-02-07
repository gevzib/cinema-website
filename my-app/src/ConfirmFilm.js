import React from 'react';
import { useState } from 'react';

export default (props) => {

    return (
        <div>
            <h1>Confirm Film Listing</h1>
            <h2>Cinema: </h2>
            {sessionStorage.getItem('cinema')}
            <h2>Location: </h2>
            {sessionStorage.getItem('location')}
            <h2>Film Title: </h2>
            {sessionStorage.getItem('film')}
            <h2>Timings: </h2>
        </div>
    )
};