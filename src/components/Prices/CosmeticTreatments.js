import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { FcCheckmark } from 'react-icons/fc';
import cosmeticIcon from '../images/cosmetic-icon.png'

const CosmeticTreatments = () => {
    return (
        <div>
            <Col>
                <Card>
                    <div className="p-3">
                    <img className="icon" src={cosmeticIcon} alt="" />
                    <h3>Hyginene Treatments</h3>
                    </div>
                <ListGroup variant="flush">
                <ListGroup.Item>
                <div className="d-flex justify-content-between">
                <p><FcCheckmark/>
                Hygiene (30 Mins)</p>
                <p class="float-end">$85</p>
                </div>
                </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Hygiene (45 Mins)</p>
                    <p class="float-end">$105</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Hygiene (60 Mins)
                    </p>
                    <p class="float-end">$145</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Additional airflow</p>
                    <p class="float-end">$35</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>
                    Scale and polish
                    </p>
                    <p class="float-end">$79</p>
                    </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                    <p><FcCheckmark/>Periodontal deep clean with local anaesthetic
                    </p>
                    <p class="float-end">$195</p>
                    </div>
                    </ListGroup.Item>
                              
                </ListGroup>
                </Card>
            </Col>
        </div>
    );
};

export default CosmeticTreatments;