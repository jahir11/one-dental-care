import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { FcCheckmark } from 'react-icons/fc';
import hygieneImg from '../images/hygiene.png'

const HygieneTreatments = () => {
    return (
        <div>
            <Col>
                <Card>
                    <div className="p-3">
                    <img className="icon" src={hygieneImg} alt="" />
                    <h3>Cosmetic Treatments</h3>
                    </div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <p><FcCheckmark/>
                        Porcelain veneers
                        </p>
                        <p class="float-end">$850</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Teeth whitening</p>
                    <p class="float-end">$315</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Enlighten whitening
                    </p>
                    <p class="float-end">$650</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Invisalign</p>
                    <p class="float-end">$3300</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Braces
                    </p>
                    <p class="float-end">$3500</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>Laser gum sharping
                    </p>
                    <p class="float-end">Bespoke</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Bonding and contouring
                    </p>
                      <p class="float-end">$475</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>Composite veneers
                    </p>
                    <p class="float-end">$450</p>
                   </div>
                </ListGroup.Item>
                                
                </ListGroup>
                </Card>
            </Col>
        </div>
    );
};

export default HygieneTreatments;