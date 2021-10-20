import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user_icon from '../images/user-icon.jpg'
import loginImg from '../images/login.jpg'
import './Login.css'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignIn, handleLogin, error} = useAuth()
    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col lg={4} md={6} sm={12} className="text-center p-3">
                    <img className="user-icon" src={user_icon} alt="" />
                    <h2 className="mb-4">Log in to your account</h2>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 text-danger">{error}</Form.Group>
                    <Button onClick={handleLogin} variant="info" className="w-100 text-white" type="submit">Login</Button>
                    <h6 className="my-3">Create an Account? <Link to="/register"> Register</Link> </h6>
                    <div>
                    <Button className="bg-danger m-2" onClick={handleGoogleSignIn}><FaGoogle/></Button>
                    <Button variant="primary m-2"><FaFacebook/></Button>
                    <Button variant="dark m-2"><FaGithub/></Button>
                    </div>
                    </Form>
                    </Col>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100 loginImg" src={loginImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;