import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImg from '../images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="text-center">
            <img className=" page-not" src={NotFoundImg} alt="" />
            <br />
            <Link to="/home">
            <Button>Back to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;