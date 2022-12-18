import React from "react";
import { Table } from "react-bootstrap";

function MonthlyStats(props) {
  return (
    <div className='Stats'>
      <h3 className='text-center'>
        {new Date().getFullYear()} Monthly Breakdown
      </h3>
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
            <td>{props.distances.novemberDistance.toFixed(2)}</td>
          </tr>
          <tr>
            <td>December</td>
            <td>{props.distances.decemberDistance.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MonthlyStats;
