import React from 'react';
import CardioTemplate from './CardioTemplate';

function WalkingComponent(props) {

  let today = new Date();
  let endOfYear = new Date('12/31/2023');
  let timeRemaining = Math.abs(endOfYear - today);
  let daysRemaining = Math.ceil(timeRemaining / (1000 * 3600 * 24));

    return (
      <div className="Walking">
        <h1>{props.exerciseType}</h1>
        <div className="container-fluid">
          <CardioTemplate CardioType="Walking" currentMileage={ props.distances.walkDistance } daysRemaining={ daysRemaining } />
        </div>
      </div>
    );
  }
  
  export default WalkingComponent;
