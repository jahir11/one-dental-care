import React, { useEffect, useState } from 'react';
import { Row,Button } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./fakeservice.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[users])
    return (
        <div className="container my-5 p-5 bg-light">
            <div className="d-flex justify-content-lg-between mb-5 ">
            <h1 className="fw-bold mx-2">Our Dental <span className="text-primary">Services</span></h1>
            <Button className="btn btn-outline-info text-white py-3 fw-bold">View All</Button>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    users.map(user => <Service key={user.id} user={user}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;