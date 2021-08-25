import React from "react";
import Route from "./Route";
import { Row, Col } from "react-bootstrap";
import "./App.css";

import shakopeeLoop from './img/ShakopeeLoop.JPG';
import chaskaLoop from "./img/ChaskaRiverLoop.JPG";
import bloomingtonFerry from './img/BloomingtonFerry.JPG';

import route1 from  "./img/ChaskaRiverLoop.JPG";


function Routes() {
  return (
    <div className='Routes'>
      <br />
      <h1 className='text-center'>Routes - Work in Progress</h1>
      <br />
      <div className='container-fluid'>
        <h2 className='text-center'>0 - 15 Miles</h2>
        <Row>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={9.5} route={'Shakopee Loop'} routeMap={shakopeeLoop} start={'Shakopee Trailhead'} end={'Shakopee Trailhead'} features={'Several ponds, steady incline up 1st Ave, 4th Ave Strava Segment'} />
          </Col>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={10.5} route={'Chaska River Loop'} routeMap={chaskaLoop} start={'Shakopee Trailhead'} end={'Chaska Trailhead'} features={'River Ride, No road riding required, can be flooded'}    />
          </Col>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={14} route={'Bloomington Ferry'} routeMap={bloomingtonFerry} start={'Shakopee Trailhead'} end={'Shakopee Trailhead'} features={'Ride by Valleyfair, straight and flat, mileage extensions'}    />
          </Col>
        </Row>
        <br />
        <h2 className='text-center'>25 - 25 Miles</h2>
        <Row>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={16} route={4} routeMap={route1} start={'Chaska Trailhead'} end={'Shakopee Trailhead'} features={'Can be flooded, check conditions'}     />
          </Col>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={21} route={5} routeMap={route1} start={'Hopkins Depot'} end={'Hopkins Depot'} features={'Get a treat at the Depot'}     />
          </Col>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={24} route={6} routeMap={route1} start={'Watertown Trailhead'} end={'Hutchinson Parking Lot'} features={'Country Riding'}     />
          </Col>
        </Row>
        <br />
        <h2 className='text-center'>25 - 50 Miles</h2>
        <Row>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={31} route={7} routeMap={route1} start={'Stillwater Trailhead'} end={'Shakopee Trailhead'} features={'Through Downtown Minneapolis'}     />
          </Col>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={45} route={8} routeMap={route1} start={'Prior Lake Trailhead'} end={'Elm Creek Parking Lot'} features={'Lake views, very few stop signs'}     />
          </Col>
          <Col className='col-md-4 col-xs-12'>
            <Route mileage={50} route={9} routeMap={route1} start={'Elm Creek Parking Lot'} end={'Shakopee Trailhead'} features={'Endurance training'}    />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Routes;
