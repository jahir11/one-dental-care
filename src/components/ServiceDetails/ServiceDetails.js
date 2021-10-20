import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams()
   
    return (
        <div>
            <h1>This is Details: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;