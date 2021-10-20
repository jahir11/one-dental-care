import { FaArrowRight ,FaFacebook,FaGoogle,FaInstagram} from "react-icons/fa";
import React from 'react';
import { Col, Container, Form, Row , Button} from 'react-bootstrap';
import logo from './images/logo.png'
const Footer = () => {
    return (
        <div className="bg-info">
            <Container className="text-white mt-5 py-5">
                <row className="d-lg-flex">
                    <Col lg={4} md={4} sm={12} className="me-5">
                    <img src={logo} alt=""  className="logo mx-2 "/><strong className="fs-3 p-1">0ne Dental Care</strong>
                    <p className="text-black-50 my-2"><small>Subscribe for access to exclusive offers and all the latest news</small></p>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Control type="text" placeholder="Your Email"/>
                        <Button className="px-5 btn-primary"><FaArrowRight/></Button>
                    </Form.Group>
                    <hr className="m-2"/>
                    <div className="fs-3 text-center">
                        <span className="m-2"><FaFacebook/></span>
                        <span className="m-2"><FaGoogle/></span>
                        <span className="m-2"><FaInstagram/></span>
                    </div>
                    <hr />
                    </Col>
                    <Col lg={8} md={8} sm={12}>
                        <Row>
                        <Col lg={3} md={6} sm={12} >
                          <h4 className="text-dark">Dental Services</h4>
                          <p>Dental Implants</p>
                          <p>Cosmetic Dentistry</p>
                          <p>Teeth Whitening</p>
                          <p>Teeth Cleaning</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                          <h4 className="text-dark">Pages</h4>
                          <p>Home</p>
                          <p>Services</p>
                          <p>Prices</p>
                          <p>Our Dentist</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                          <h4 className="text-dark">Contact</h4>
                          <p>Dental Implants</p>
                          <p>Cosmetic Dentistry</p>
                          <p>Teeth Whitening</p>
                          <p>Teeth Cleaning</p>
                    </Col>
                        </Row>

                    </Col>
                    
                </row>

            </Container>
        </div>
    );
};

export default Footer;