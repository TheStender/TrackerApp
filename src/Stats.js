import React from "react";
import MonthlyMileage from "./MonthlyMileage";
import MonthlyStats from "./MonthlyStats";

function Stats(props) {
  return (
    <div className='Stats'>
      <div className='container-fluid'>
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
        <MonthlyStats distances={props.distances} />
      </div>
    </div>
  );
}

export default Stats;
