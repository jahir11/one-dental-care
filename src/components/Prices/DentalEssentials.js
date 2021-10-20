import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { FcCheckmark } from "react-icons/fc";
import listImg from '../images/list-icon.png';

const DentalEssentials = () => {
    return (
        <div>
            <Col>
                <Card>
                    <div className="p-3">
                    <img className="icon" src={listImg} alt="" />
                    <h3>Dental Essentials</h3>
                    </div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <p><FcCheckmark/>
                        New patient dental check-up
                        </p>
                        <p class="float-end">$130</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                     Radiographs (X-Rays)
                                    </p>
                    <p class="float-end">$15</p>
                    </div>                                </ListGroup.Item>
                    <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                                    <p><FcCheckmark/>
                                    Regular dental examination
                                    </p>
                                    <p class="float-end">$80</p>
                                </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <p><FcCheckmark/>
                                    Emergency consultation
                                    </p>
                                    <p class="float-end">$150</p>
                                </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                <p><FcCheckmark/>
                                    Panoramic X-Ray (OPG)
                                </p>
                                <p class="float-end">$60</p>
                                </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                <p><FcCheckmark/>
                                    Periodontal сonsultation
                                </p>
                                <p class="float-end">$150</p>
                                </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                <p><FcCheckmark/>
                                 Dental implant
                                </p>
                                <p class="float-end">from $2550</p>
                                </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                <p><FcCheckmark/>
                                    Sedation
                                </p>
                                <p class="float-end">$350</p>
                            </div>
                        </ListGroup.Item>
                                
                    </ListGroup>
                </Card>
            </Col>          
        </div>
    );
};

export default DentalEssentials;
