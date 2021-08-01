import React from "react";
import MonthlyMileage from './MonthlyMileage';


function Stats(props) {
  return (
    <div className="Stats">
      <div className="container-fluid">
        <h1 className="text-center">Stats - Coming Soon!</h1>
        <br />
        <h3 className="text-center">Mileage per Month</h3>
        <div className='row'>
            <div className='col-md-2 col-xs-0'></div>
            <div className='col-md-8  col-xs-12'>
              <MonthlyMileage distances={props.distances } />
            </div>
            <div className='col-md-2 col-xs-0'></div>
          </div>
      </div>
    </div>
  );
}

export default Stats;