import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { FcCheckmark } from 'react-icons/fc';
import dentalSurgeryIcon from '../images/dental-surgery.jpg'

const DentalSurgery = () => {
    return (
        <div>
            <Col>
                <Card>
                    <div className="p-3">
                    <img className="icon" src={dentalSurgeryIcon} alt="" />
                    <h3>Dental Surgery</h3>
                    </div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <p><FcCheckmark/>
                        Simple extraction
                        </p>
                        <p class="float-end">$200</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Surgical extractions</p>
                    <p class="float-end">$250</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Wisdom tooth extraction
                    </p>
                    <p class="float-end">$300</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Gum contouring</p>
                    <p class="float-end">$50</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Root canal treatment
                    </p>
                    <p class="float-end">from $465</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>Dental implant
                    </p>
                    <p class="float-end">from 1595</p>
                    </div>
                    </ListGroup.Item>              
                </ListGroup>
                </Card>
            </Col>
        </div>
    );
};

export default DentalSurgery;