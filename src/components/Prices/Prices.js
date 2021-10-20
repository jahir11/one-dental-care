import React  from 'react';
import {Container,  Row } from 'react-bootstrap';
import CosmeticTreatments from './CosmeticTreatments';
import DentalEssentials from './DentalEssentials';
import DentalSurgery from './DentalSurgery';
import HygieneTreatments from './HygieneTreatments';
import './Prices.css'

const Prices = () => {
    return (
        <div>
            <div className="text-center my-5">
            <h1>Price Guide</h1>
            <p>We treat every patient as an individual and create treatment plans to fit your <br /> specific needs.</p>
            </div>
            <Container>
            <Row xs={1} md={2} lg={2} className="g-4">
             <DentalEssentials/>
             <HygieneTreatments/>
             <CosmeticTreatments/>
             <DentalSurgery/>
            </Row>
            </Container>
        </div>
    );
};

export default Prices;