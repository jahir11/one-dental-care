import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import dentistBg from '../images/our-dentist/dentistBg.jpg'
import dentist1 from '../images/our-dentist/dentist1.jpg'
import dentist2 from '../images/our-dentist/dentist2.jpg'
import dentist3 from '../images/our-dentist/dentist3.jpg'
const OurDentist = () => {
    return (
        <div>
            <Container className="p-5 bg-light my-5">
                <Row>
                    <Col lg={5} md={6} sm={12} className="order-sm-1 order-lg-0">
                    <span className="bg-info text-white p-2 rounded-3">Our Doctors</span>
                    <h1 className="my-5">Meet our award-winning <br /> dental <span className="bg-success text-white p-0">team</span></h1>
                    <p className="text-black-50">We know it can be difficult searching for a personal or family dentist. At our office  we take pride in creating and maintaining beautiful and healthy smiles for our patients.</p>
                    </Col>
                    <Col lg={7} md={6} sm={12}>
                     <img className="img-fluid mb-sm-5" src={dentistBg} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={dentist1} />
                    <Card.Body>
                    <p className="bg-info text-white d-inline p-1  rounded-3 mb-3">Dental Implants</p>
                    <Card.Title className="my-4">Anne Middleton</Card.Title>
                    <Card.Text className="text-black-50">
                    She had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    {/* ------ */}
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={dentist2} />
                    <Card.Body>
                    <p className="bg-info text-white d-inline p-1  rounded-3 mb-3">Hygiene Treatments</p>
                    <Card.Title className="my-4">Amy Holland</Card.Title>
                    <Card.Text className="text-black-50">
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commasand devious Semikoli, but the Little Blind Text didn’t listen.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    {/* ---------- */}
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={dentist3} />
                    <Card.Body>
                    <p className="bg-info text-white d-inline p-1  rounded-3 mb-3">Crowns and Bridges</p>
                    <Card.Title className="my-4">Mark Hoffman</Card.Title>
                    <Card.Text className="text-black-50">
                    A small river flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurDentist;