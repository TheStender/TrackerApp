import React from "react";
import "./App.css";
import Biking from "./BikingComponent";
import YearlyMileage from "./YearlyMileage";

function Home(props) {
  return (
    <div className='Home'>      
      <br />
      <div className='container-fluid'>
        <Biking exerciseType='Biking' distances={props.distances} />
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-md-2 col-xs-0'></div>
          <div className='col-md-8  col-xs-12'>
            <YearlyMileage distances={props.distances} />
          </div>
          <div className='col-md-2 col-xs-0'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
