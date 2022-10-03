import React from "react";
import MonthlyMileage from "./MonthlyMileage";
import { Table } from "react-bootstrap";

function Stats(props) {
  return (
    <div className='Stats'>
      <div className='container-fluid'>
        <h1 className='text-center'>Stats - Coming Soon!</h1>
        <h3 className='text-center'>
          {(
            parseFloat(props.elevation.roadElevation) +
            parseFloat(props.elevation.eElevation) +
            parseFloat(props.elevation.virtualElevation)
          ).toFixed(0)}{" "}
          Feet Climbed
        </h3>
        <br />
        <h3 className='text-center'>Mileage per Month</h3>
        <div className='row'>
          <div className='col-md-2 col-xs-0'></div>
          <div className='col-md-8  col-xs-12'>
            <MonthlyMileage distances={props.distances} />
          </div>
          <div className='col-md-2 col-xs-0'></div>
        </div>
        <br />
        <br />
        <br />
        <h3 className='text-center'>{new Date().getFullYear()} Monthly Breakdown</h3>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>{props.distances.januaryDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>February</td>
              <td>{props.distances.februaryDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>March</td>
              <td>{props.distances.marchDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>April</td>
              <td>{props.distances.aprilDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>May</td>
              <td>{props.distances.mayDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>June</td>
              <td>{props.distances.juneDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>July</td>
              <td>{props.distances.julyDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>August</td>
              <td>{props.distances.augustDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>September</td>
              <td>{props.distances.septemberDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>October</td>
              <td>{props.distances.octoberDistance.toFixed(2)}</td>
            </tr>
            <tr>
              <td>November</td>
              <td>TBD {/* {props.distances.novemberDistance.toFixed(2)} */}</td>
            </tr>
            <tr>
              <td>December</td>
              <td>TBD {/* {props.distances.decemberDistance.toFixed(2)} */}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Stats;
