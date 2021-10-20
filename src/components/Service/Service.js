import { FaArrowCircleRight } from 'react-icons/fa';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const {id, title, description, image} = props?.user
    return (
        <div>
            <Col>
      <Card className="text-center p-3">
        <Card.Img variant="top" src={image} className="service-img"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.slice(0, 150)}<b>......</b>
          </Card.Text>
          <Link className="text-success fw-bold anchor" to={`/service/${id}`}>learn more <FaArrowCircleRight/></Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;