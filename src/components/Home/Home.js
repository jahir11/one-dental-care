import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
import homeImg from '../images/home-bg.jpg'
import Services from '../Services/Services';
import Booking from '../Booking/Booking';
import OurDentist from '../OurDentist/OurDentist';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="m-5">
                <div className="row">
                <div className="col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
                    <div>
                    <h1 className="fw-bold header-text">We Are Ready to <br /> Help Your Dental <br /> Problems</h1>
                    <br />
                    <p className="bg-dark p-1 text-white">Because your smile is the beauty of your soul.</p>
                    <Link to="/booking">
                    <Button className="btn btn-outline-info text-white">Booking Here</Button>
                    </Link>
                    </div>
                </div>
                <div className="bg-white col-md-6 col-lg-6 col-12 mt-5">
                  <img src={homeImg} alt="" className="img-fluid home-bg" />
                </div>
            </div>
            <Booking></Booking>
            <Services></Services>
            <OurDentist></OurDentist>
        </div>
    );
};

export default Home;