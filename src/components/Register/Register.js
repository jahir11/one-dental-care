import React from 'react';
import {Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user_icon from '../images/user-icon.jpg'
import registerImg from '../images/register.jpg'
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const {handleEmail, handlePassword, handleRegisterNow, error} = useAuth()
    return (
        <div>
            <Container>
                <h2 className="text-center my-5">Register for free and <br /> experience One_Dental_Care Services</h2>
                <Row className="d-flex align-items-center">
                    <Col lg={4} md={6} sm={12} className="text-center p-3">
                    <img className="user-icon" src={user_icon} alt="" />
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                        <Form.Group className="mb-3 text-danger ">{error}</Form.Group>
                    </Form.Group>
                    <Button onClick={handleRegisterNow} variant="info" className="w-100 text-white" type="submit">Register Now</Button>
                    <h6 className="my-3"> Already Have an Account? <Link to="/login"> login</Link> </h6>
                    </Form>
                    </Col>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100 loginImg" src={registerImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;