import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';

function userJumbotron() {
    return (
        
        <div className="jumbotron">
        <Jumbotron className="main-jumbotron">
        <h1 className='jumbotron'>Directory App</h1>
        <p className="text">type in the search bar to find an user</p>
        </Jumbotron>
        </div>
    )
}

export default userJumbotron;