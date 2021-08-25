import React from "react";
import { Card } from 'react-bootstrap';


function Route(props) {
  return (
    <div className='container-fluid Routes'>
      <Card>
        <Card.Img variant="top" src={props.routeMap} />
        <Card.Body className="bg-dark">
          <Card.Title>{props.route} - {props.mileage} miles</Card.Title>
          <Card.Text>
            <div>
              <ul>
                <li>Start: {props.start}</li>
                <li>End: {props.end}</li>
                <li>Features: {props.features}</li>
              </ul>
            </div>
          </Card.Text>
      </Card.Body>
</Card>
    </div>
  );
}

export default Route;
