import React from 'react';
import Chart from './Chart';

function CardioTemplate(props) {

    let currentMileage = props.currentMileage;
    let totalMileage = 1000;
    let percentComplete = ((currentMileage / totalMileage) * 100).toFixed(2);
    let daysRemaining = props.daysRemaining;
    let daysPassed = props.daysPassed;
    let startOfYear = new Date('1/1/2021');
    let daysUntilCompletion = daysPassed + ((totalMileage-currentMileage) / (currentMileage / daysPassed));
    let dateOfCompletion = addDays(startOfYear, daysUntilCompletion);
    let mm = dateOfCompletion.getMonth() + 1;
    let dd = dateOfCompletion.getDate();
    let yy = dateOfCompletion.getFullYear();
    let finalDate = `${mm}/${dd}/${yy}`;

    function addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days)
      return result;
    }
  
      return (
        <div>
        <h1>{props.CardioType}</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
                <p>Current Mileage: { currentMileage }</p>
                <p>Goal: { totalMileage }</p>
                <p>Mileage Remaining: { (totalMileage - currentMileage).toFixed(2) }</p>
                <p>Percent Complete: { percentComplete }%</p>
                <p>Average miles needed per day: {((totalMileage - currentMileage) / daysRemaining).toFixed(2) }</p>
                <p>Average miles needed per week: { (((totalMileage - currentMileage)  / daysRemaining) * 7).toFixed(2) }</p>
            </div>
            <div className="col">
              <Chart percentComplete={ percentComplete }/>
              <p>Current Average per day: { (currentMileage / daysPassed).toFixed(2) }</p>
              <p>Estimated Date of Completion: { finalDate }</p>
            </div>
          </div>
        </div>
        </div>
      );
    }
    
    export default CardioTemplate;