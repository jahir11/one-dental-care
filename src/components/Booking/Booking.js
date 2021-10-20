import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Booking = () => {
    return (
        <div>
            <Container className="p-5 bg-light my-5">
                <Row>
                    <Col lg={4} md={6} sm={12} >
                    
                    <h1>Booking an Appointment</h1>
                    
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                     <Form>
                     <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Control type="Date" placeholder="Date" />
                    </Form.Group>
                     </Form>
                    </Col>
                    
                    <Col lg={4} md={6} sm={12}>
                     <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="info" className="w-100 text-white" type="submit">Booking Now</Button>
                     </Form>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Booking;