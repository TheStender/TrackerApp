import React from 'react';
import {Line} from 'react-chartjs-2';

function MonthlyMileage(props){

  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2013',
        data: [9,0,65,53,72,224,178,76,0,4,13,12],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: '2014',
        data: [25,0,0,70,23,134,50,52,4,4,7,0],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: '2015',
        data: [26,6,61,70,106,131,36,66,37,4,10,0],
        fill: false,
        backgroundColor: 'rgb(52, 161, 235)',
        borderColor: 'rgba(52, 161, 235, 0.2)',
      },
      {
        label: '2016',
        data: [7,6,5,73,37,28,34,55,29,11,15,4],
        fill: false,
        backgroundColor: 'rgb(30, 201, 124)',
        borderColor: 'rgba(30, 201, 124, 0.2)',
      },
      {
        label: '2017',
        data: [40,0,22,33,106,56,122,26,0,0,22,0],
        fill: false,
        backgroundColor: 'rgb(219, 222, 69)',
        borderColor: 'rgba(219, 222, 69, 0.2)',
      },
      {
        label: '2018',
        data: [45,17,30,55,15,19,0,13,16,0,6,0],
        fill: false,
        backgroundColor: 'rgb(184, 50, 186)',
        borderColor: 'rgba(184, 50, 186, 0.2)',
      },
      {
        label: '2019',
        data: [14,47,70,59,78,80,91,125,28,28,29,38],
        fill: false,
        backgroundColor: 'rgb(209, 123, 48)',
        borderColor: 'rgba(209, 123, 48, 0.2)',
      },
      {
        label: '2020',
        data: [19,0,55,129,185,111,144,115,34,0,143,88],
        fill: false,
        backgroundColor: 'rgb(115, 11, 9)',
        borderColor: 'rgba(115, 11, 9, 0.2)',
      },
      {
        label: '2021',
        data: [props.distances.januaryDistance.toFixed(2), props.distances.februaryDistance.toFixed(2), props.distances.marchDistance.toFixed(2), props.distances.aprilDistance.toFixed(2), props.distances.mayDistance.toFixed(2), props.distances.juneDistance.toFixed(2), props.distances.julyDistance.toFixed(2), props.distances.augustDistance.toFixed(2), props.distances.septemberDistance.toFixed(2), props.distances.octoberDistance.toFixed(2), props.distances.novemberDistance.toFixed(2)],
        fill: false,
        backgroundColor: 'rgb(154, 245, 64)',
        borderColor: 'rgba(154, 245, 64, 0.2)',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div className="chart">
        <Line data={data} options={options} />
    </div>
)
}

export default MonthlyMileage;