import React from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";

function Header(props) {
  let today = new Date();
  let month = today.toLocaleString("default", { month: "long" });
  let date = month + " " + today.getDate() + ", " + today.getFullYear();

  return (
    <div className="Header">
        <Container fluid>
          <Row>
            <Col xs={0} md={{span: 1, order: 1}} className='text-left'></Col>
            <Col xs={{span: 12, order: "first"}} md={{span: 10, order: 2}} className='text-center'>
              <h1>Stender's Biking Tracker</h1>
            </Col>
            <Col xs={{span: 12, order: "last"}} md={{span: 1, order: 3}} className='text-center'>
              <NavDropdown title="&#x2630;">
                <NavDropdown.Item href='/'>Home</NavDropdown.Item>
                <NavDropdown.Item href='/stats'>Stats</NavDropdown.Item>
                <NavDropdown.Item href='/routes'>Routes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/about'>About</NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col xs={12} md={{order: "last"}} className='text-center'>
              <h3 className='text-center'>
                {date} -{" "}
                {(
                  parseFloat(props.distances.roadDistance) +
                  parseFloat(props.distances.eDistance) +
                  parseFloat(props.distances.virtualDistance)
                ).toFixed(2)}{" "}
                Total Miles
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Header;
