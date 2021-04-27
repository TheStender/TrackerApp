import React, { useState, useEffect } from 'react';
import './App.css';
import Biking from './BikingComponent';
import LineChart from './LineChart';
import YearlyMileage from './YearlyMileage';




function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [activities, setActivities] = useState({})
  const [roadDistance, setRoadDistance] = useState(0)
  const [eDistance, setEDistance] = useState(0)
  const [virtualDistance, setVirtualDistance] = useState(0)
  const [januaryDistance, setJanuaryDistance] = useState(0);
  const [februaryDistance, setFebruaryDistance] = useState(0);
  const [marchDistance, setMarchDistance] = useState(0);
  const [aprilDistance, setAprilDistance] = useState(0);

  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REACT_APP_REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

  let today = new Date();
  let month = today.toLocaleString('default', {month: 'long'});
  let date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
  let epochString = 1609459200; 
  // January 1st, 2020 epocj timestamp 1577836800
  // December 1st, 2020 epoch timestamp 1606780800
  // January 1st, 2021 epoch timestamp 1609459200

  // Strava credentials
  let clientID = REACT_APP_CLIENT_ID;
  const clientSecret = REACT_APP_API_KEY;

  //refresh token and call address
  const refreshToken = REACT_APP_REFRESH_TOKEN;
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`


  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?after=${epochString}&per_page=200&access_token=`
 

  // Use refresh token to get current access token
  // look into useEffect and lifecycle
  // could you store access token and only refresh if needed? look into
  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getActivities(result.access_token))
  }, [callRefresh])

  //use current access token to call all activities
  function getActivities(access){
      fetch(callActivities + access)
      .then(res => res.json())
      .then((data) => {
          setActivities(data) 
          setIsLoading(prev => !prev)
          setRoadDistance(calculateDistance(data, 'Ride'))
          setEDistance(calculateDistance(data, 'EBikeRide'))
          setVirtualDistance(calculateDistance(data, 'VirtualRide'))
          setJanuaryDistance(getMonthlyActivities(data, '2021-01'));
          setFebruaryDistance(getMonthlyActivities(data, '2021-02'));
          setMarchDistance(getMonthlyActivities(data, '2021-03'));
          setAprilDistance(getMonthlyActivities(data, '2021-04'));
        }
      )
      .catch(e => console.log(e))
  }

  const calculateDistance = (activities, type) => {
      let distanceTotal = 0;
      activities.forEach((ride) => {
        if(ride.type === type) {
          distanceTotal = distanceTotal + ride.distance;
        }
      })
      return (distanceTotal / 1609).toFixed(2)

  }

  let distances = {
    roadDistance: roadDistance,
    eDistance: eDistance,
    virtualDistance: virtualDistance,
    januaryDistance: januaryDistance,
    februaryDistance: februaryDistance,
    marchDistance: marchDistance,
    aprilDistance: aprilDistance
  }

  const getMonthlyActivities = (activities, month) => {
    let distanceTotal = 0;
    activities.forEach((ride) => {
        if(ride.start_date.startsWith(month) && ride.type.includes('Ride')) {
          distanceTotal = distanceTotal + ride.distance;
        }  
    })
    return (distanceTotal / 1609);
  }

  return (
    <div className="App" style={{backgroundColor: '#191919', color: 'white'}}>
      <h1>Stender's Workout Tracker</h1>
      <h3>{date}</h3>
      <h4>{ (parseFloat(distances.roadDistance) + parseFloat(distances.eDistance) + parseFloat(distances.virtualDistance)).toFixed(2) } Total Miles</h4>
      <div className="container-fluid">
              <Biking exerciseType="Biking" distances={distances} />
        <br /><br /><br />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {/* <LineChart distances={ distances } /> */}
            <YearlyMileage distances={ distances } />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
