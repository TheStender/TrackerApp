import React from "react";
import CardioTemplate from "./CardioTemplate";

function Exercise(props) {
  let today = new Date();
  let endOfYear = new Date("12/31/2022");
  let startOfYear = new Date("1/1/2022");
  let timeRemaining = Math.abs(endOfYear - today);
  let timePassed = Math.abs(today - startOfYear);
  let daysRemaining = Math.ceil(timeRemaining / (1000 * 3600 * 24));
  let daysPassed = Math.ceil(timePassed / (1000 * 3600 * 24));

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 col-xs-12'>
            <CardioTemplate
              CardioType='Road Biking'
              currentMileage={props.distances.roadDistance}
              daysRemaining={daysRemaining}
              daysPassed={daysPassed}
            />
          </div>
          <div className='col-md-4 col-xs-12'>
            <CardioTemplate
              CardioType='E Biking'
              currentMileage={props.distances.eDistance}
              daysRemaining={daysRemaining}
              daysPassed={daysPassed}
            />
          </div>
          <div className='col-md-4 col-xs-12'>
            <CardioTemplate
              CardioType='Virtual Biking'
              currentMileage={props.distances.virtualDistance}
              daysRemaining={daysRemaining}
              daysPassed={daysPassed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
