import React from "react";
import { Table } from "react-bootstrap";

function MonthlyStats(props) {

  const d = new Date();
  let currentMonth = d.getMonth();

  let januaryDistances = [9, 25, 26, 7, 40, 45, 14, 19, 115.48, 204.55, 131, 59.87];
  let februaryDistances = [0, 0, 6, 6, 0, 17, 47, 0, 143.14, 45.67, 115, 21.17];
  let marchDistances = [65, 0, 61, 5, 22, 30, 70, 55, 159.41, 51.49, 5, 0];
  let aprilDistances = [53, 70, 70, 73, 33, 55, 59, 129, 76, 63.18, 58, 57.03];
  let mayDistances = [72, 23, 106, 37, 106, 15, 78, 185, 64.77, 89.6, 172, 91.95];
  let juneDistances = [224, 134, 131, 28, 56, 19, 80, 111, 225.55, 107.31, 128, 79.53];
  let julyDistances = [178, 50, 36, 34, 122, 0, 91, 144, 45.35, 170.43, 56, 227.09];
  let augustDistances = [76, 52, 66, 55, 26, 13, 125, 115, 195.95, 115.32, 16, 26.6];
  let septemberDistances = [0, 4, 37, 29, 0, 16, 28, 34, 150.99, 51.5, 7.77, 71.53];
  let octoberDistances = [4, 4, 4, 11, 0, 0, 28, 0, 58.89, 27.8, 18, 27.19];
  let novemberDistances = [13, 7, 10, 15, 22, 6, 29, 143, 33.3, 18.86, 37, 0];
  let decemberDistances = [12, 0, 0, 4, 0, 0, 38, 88, 0, 26.77, 0, 7.51];

  function calculateMonthlyAverage(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    return (sum / array.length).toFixed(2);
  }
  

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
            <th className='w-25'>Monthly Average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>{props.distances.januaryDistance.toFixed(2)}</td>
            <td>{calculateMonthlyAverage(januaryDistances)}</td>
          </tr>
          <tr>
            <td>February</td>
            <td>{currentMonth >= 1 ? props.distances.februaryDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(februaryDistances)}</td>
          </tr>
          <tr>
            <td>March</td>
            <td>{currentMonth >= 2 ? props.distances.marchDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(marchDistances)}</td>
          </tr>
          <tr>
            <td>April</td>
            <td>{currentMonth >= 3 ? props.distances.aprilDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(aprilDistances)}</td>
          </tr>
          <tr>
            <td>May</td>
            <td>{currentMonth >= 4 ? props.distances.mayDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(mayDistances)}</td>
          </tr>
          <tr>
            <td>June</td>
            <td>{currentMonth >= 5 ? props.distances.juneDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(juneDistances)}</td>
          </tr>
          <tr>
            <td>July</td>
            <td>{currentMonth >= 6 ? props.distances.julyDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(julyDistances)}</td>
          </tr>
          <tr>
            <td>August</td>
            <td>{currentMonth >= 7 ? props.distances.augustDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(augustDistances)}</td>
          </tr>
          <tr>
            <td>September</td>
            <td>{currentMonth >= 8 ? props.distances.septemberDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(septemberDistances)}</td>
          </tr>
          <tr>
            <td>October</td>
            <td>{currentMonth >= 9 ? props.distances.octoberDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(octoberDistances)}</td>
          </tr>
          <tr>
            <td>November</td>
            <td>{currentMonth >= 10 ? props.distances.novemberDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(novemberDistances)}</td>
          </tr>
          <tr>
            <td>December</td>
            <td>{currentMonth >= 11 ? props.distances.decemberDistance.toFixed(2) : 'TBD'}</td>
            <td>{calculateMonthlyAverage(decemberDistances)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MonthlyStats;
