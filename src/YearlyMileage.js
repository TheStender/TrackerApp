import React from 'react';
import {Line} from 'react-chartjs-2';

function LineChart(props){

  let januaryTotal = props.distances.januaryDistance;
  let februaryTotal = januaryTotal + props.distances.februaryDistance;
  let marchTotal = februaryTotal + props.distances.marchDistance;
  let aprilTotal = marchTotal + props.distances.aprilDistance;
  let mayTotal = aprilTotal + props.distances.mayDistance;
  let juneTotal = mayTotal + props.distances.juneDistance;

  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2013',
        data: [9,9,74,127,199,423,601,677,677,681,694,706],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: '2014',
        data: [25,25,25,95,118,252,302,354,358,362,369,369],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: '2015',
        data: [26,32,93,163,269,400,436,502,539,543,553,553],
        fill: false,
        backgroundColor: 'rgb(52, 161, 235)',
        borderColor: 'rgba(52, 161, 235, 0.2)',
      },
      {
        label: '2016',
        data: [7,13,18,91,128,156,190,245,274,285,300,304],
        fill: false,
        backgroundColor: 'rgb(30, 201, 124)',
        borderColor: 'rgba(30, 201, 124, 0.2)',
      },
      {
        label: '2017',
        data: [40,40,62,95,201,257,379,405,405,405,427,427],
        fill: false,
        backgroundColor: 'rgb(219, 222, 69)',
        borderColor: 'rgba(219, 222, 69, 0.2)',
      },
      {
        label: '2018',
        data: [45,62,92,147,162,181,181,194,210,210,216,216],
        fill: false,
        backgroundColor: 'rgb(184, 50, 186)',
        borderColor: 'rgba(184, 50, 186, 0.2)',
      },
      {
        label: '2019',
        data: [14,61,131,190,268,348,439,564,592,620,649,687],
        fill: false,
        backgroundColor: 'rgb(209, 123, 48)',
        borderColor: 'rgba(209, 123, 48, 0.2)',
      },
      {
        label: '2020',
        data: [19,19,74,203,388,499,643,758,792,792,935,1023],
        fill: false,
        backgroundColor: 'rgb(115, 11, 9)',
        borderColor: 'rgba(115, 11, 9, 0.2)',
      },
      {
        label: '2021',
        data: [januaryTotal.toFixed(2), februaryTotal.toFixed(2), marchTotal.toFixed(2), aprilTotal.toFixed(2), mayTotal.toFixed(2), juneTotal.toFixed(2)],
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

export default LineChart;