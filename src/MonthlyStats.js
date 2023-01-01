import React from "react";
import { Table } from "react-bootstrap";

function MonthlyStats(props) {

  const d = new Date();
  let currentMonth = d.getMonth();

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
            <td>{currentMonth >= 1 ? props.distances.februaryDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>March</td>
            <td>{currentMonth >= 2 ? props.distances.marchDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>April</td>
            <td>{currentMonth >= 3 ? props.distances.aprilDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>May</td>
            <td>{currentMonth >= 4 ? props.distances.mayDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>June</td>
            <td>{currentMonth >= 5 ? props.distances.juneDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>July</td>
            <td>{currentMonth >= 6 ? props.distances.julyDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>August</td>
            <td>{currentMonth >= 7 ? props.distances.augustDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>September</td>
            <td>{currentMonth >= 8 ? props.distances.septemberDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>October</td>
            <td>{currentMonth >= 9 ? props.distances.octoberDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>November</td>
            <td>{currentMonth >= 10 ? props.distances.novemberDistance.toFixed(2) : 'TBD'}</td>
          </tr>
          <tr>
            <td>December</td>
            <td>{currentMonth >= 11 ? props.distances.decemberDistance.toFixed(2) : 'TBD'}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MonthlyStats;
