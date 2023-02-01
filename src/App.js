import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Stats from "./Stats";
import Routes from "./Routes";
import About from "./About";

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});
  const [roadDistance, setRoadDistance] = useState(0);
  const [eDistance, setEDistance] = useState(0);
  const [virtualDistance, setVirtualDistance] = useState(0);
  const [januaryDistance, setJanuaryDistance] = useState(0);
  const [februaryDistance, setFebruaryDistance] = useState(0);
  const [marchDistance, setMarchDistance] = useState(0);
  const [aprilDistance, setAprilDistance] = useState(0);
  const [mayDistance, setMayDistance] = useState(0);
  const [juneDistance, setJuneDistance] = useState(0);
  const [julyDistance, setJulyDistance] = useState(0);
  const [augustDistance, setAugustDistance] = useState(0);
  const [septemberDistance, setSeptemberDistance] = useState(0);
  const [octoberDistance, setOctoberDistance] = useState(0);
  const [novemberDistance, setNovemberDistance] = useState(0);
  const [decemberDistance, setDecemberDistance] = useState(0);

  const [roadElevation, setRoadElevation] = useState(0);
  const [eElevation, setEElevation] = useState(0);
  const [virtualElevation, setVirtualElevation] = useState(0);

  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REACT_APP_REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

  let epochString = 1672531200;

  // Strava credentials
  let clientID = REACT_APP_CLIENT_ID;
  const clientSecret = REACT_APP_API_KEY;

  //refresh token and call address
  const refreshToken = REACT_APP_REFRESH_TOKEN;
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?after=${epochString}&per_page=200&access_token=`;

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, [callRefresh]);

  //use current access token to call all activities
  function getActivities(access) {
    fetch(callActivities + access)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setIsLoading((prev) => !prev);
        setRoadDistance(calculateDistance(data, "Ride"));
        setEDistance(calculateDistance(data, "EBikeRide"));
        setVirtualDistance(calculateDistance(data, "VirtualRide"));
        setJanuaryDistance(getMonthlyActivities(data, "2023-01"));
        setFebruaryDistance(getMonthlyActivities(data, "2023-02"));
        setMarchDistance(getMonthlyActivities(data, "2023-03"));
        setAprilDistance(getMonthlyActivities(data, "2023-04"));
        setMayDistance(getMonthlyActivities(data, "2023-05"));
        setJuneDistance(getMonthlyActivities(data, "2023-06"));
        setJulyDistance(getMonthlyActivities(data, "2023-07"));
        setAugustDistance(getMonthlyActivities(data, "2023-08"));
        setSeptemberDistance(getMonthlyActivities(data, "2023-09"));
        setOctoberDistance(getMonthlyActivities(data, "2023-10"));
        setNovemberDistance(getMonthlyActivities(data, "2023-11"));
        setDecemberDistance(getMonthlyActivities(data, "2023-12"));
        setRoadElevation(getElevationGain(data, "Ride"));
        setEElevation(getElevationGain(data, "EBikeRide"));
        setVirtualElevation(getElevationGain(data, "VirtualRide"));
      })
      .catch((e) => console.log(e));
  }

  const calculateDistance = (activities, type) => {
    let distanceTotal = 0;
    activities.forEach((ride) => {
      if (ride.type === type) {
        distanceTotal = distanceTotal + ride.distance;
      }
    });
    return (distanceTotal / 1609).toFixed(2);
  };

  let getElevationGain = (activities, type) => {
    let totalElevation = 0;
    activities.forEach((ride) => {
      if (ride.type === type) {
        totalElevation = totalElevation + ride.total_elevation_gain;
      }
    });
    return (totalElevation * 3.281).toFixed(0);
  };

  let distances = {
    roadDistance: roadDistance,
    eDistance: eDistance,
    virtualDistance: virtualDistance,
    januaryDistance: januaryDistance,
    februaryDistance: februaryDistance,
    marchDistance: marchDistance,
    aprilDistance: aprilDistance,
    mayDistance: mayDistance,
    juneDistance: juneDistance,
    julyDistance: julyDistance,
    augustDistance: augustDistance,
    septemberDistance: septemberDistance,
    octoberDistance: octoberDistance,
    novemberDistance: novemberDistance,
    decemberDistance: decemberDistance,
  };

  let elevation = {
    roadElevation: roadElevation,
    eElevation: eElevation,
    virtualElevation: virtualElevation,
  };

  const getMonthlyActivities = (activities, month) => {
    let distanceTotal = 0;
    activities.forEach((ride) => {
      if (ride.start_date.startsWith(month) && ride.type.includes("Ride")) {
        distanceTotal = distanceTotal + ride.distance;
      }
    });
    return distanceTotal / 1609;
  };

  return (
    <Router>
      <Header distances={distances} />
      <Switch>
        <Route path='/' exact>
          <Home distances={distances} />
        </Route>
        <Route path='/stats'>
          <Stats distances={distances} elevation={elevation} />
        </Route>
        <Route path='/routes' component={Routes} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
