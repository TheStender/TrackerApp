import React from "react";
import { Line } from "react-chartjs-2";

function MonthlyMileage(props) {
  let januaryDistance = props.distances.januaryDistance.toFixed(2);
  let februaryDistance = props.distances.februaryDistance.toFixed(2);
  let marchDistance = props.distances.marchDistance.toFixed(2);
  let aprilDistance = props.distances.aprilDistance.toFixed(2);
  let mayDistance = props.distances.mayDistance.toFixed(2);
  let juneDistance = props.distances.juneDistance.toFixed(2);
  let julyDistance = props.distances.julyDistance.toFixed(2);
  let augustDistance = props.distances.augustDistance.toFixed(2);
  let septemberDistance = props.distances.septemberDistance.toFixed(2);
  let octoberDistance = props.distances.octoberDistance.toFixed(2);
  let novemberDistance = props.distances.novemberDistance.toFixed(2);
  let decemberDistance = props.distances.decemberDistance.toFixed(2);

  const d = new Date();
  let currentMonth = d.getMonth();

  if (februaryDistance < 0.01 && currentMonth < 1) februaryDistance = null;
  if (marchDistance < 0.01 && currentMonth < 2) marchDistance = null;
  if (aprilDistance < 0.01 && currentMonth < 3) aprilDistance = null;
  if (mayDistance < 0.01 && currentMonth < 4) mayDistance = null;
  if (juneDistance < 0.01 && currentMonth < 5) juneDistance = null;
  if (julyDistance < 0.01 && currentMonth < 6) julyDistance = null;
  if (augustDistance < 0.01 && currentMonth < 7) augustDistance = null;
  if (septemberDistance < 0.01 && currentMonth < 8) septemberDistance = null;
  if (octoberDistance < 0.01 && currentMonth < 9) octoberDistance = null;
  if (novemberDistance < 0.01 && currentMonth < 10) novemberDistance = null;
  if (decemberDistance < 0.01 && currentMonth < 11) decemberDistance = null;

  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2013",
        data: [9, 0, 65, 53, 72, 224, 178, 76, 0, 4, 13, 12],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "2014",
        data: [25, 0, 0, 70, 23, 134, 50, 52, 4, 4, 7, 0],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "2015",
        data: [26, 6, 61, 70, 106, 131, 36, 66, 37, 4, 10, 0],
        fill: false,
        backgroundColor: "rgb(52, 161, 235)",
        borderColor: "rgba(52, 161, 235, 0.2)",
      },
      {
        label: "2016",
        data: [7, 6, 5, 73, 37, 28, 34, 55, 29, 11, 15, 4],
        fill: false,
        backgroundColor: "rgb(30, 201, 124)",
        borderColor: "rgba(30, 201, 124, 0.2)",
      },
      {
        label: "2017",
        data: [40, 0, 22, 33, 106, 56, 122, 26, 0, 0, 22, 0],
        fill: false,
        backgroundColor: "rgb(219, 222, 69)",
        borderColor: "rgba(219, 222, 69, 0.2)",
      },
      {
        label: "2018",
        data: [45, 17, 30, 55, 15, 19, 0, 13, 16, 0, 6, 0],
        fill: false,
        backgroundColor: "rgb(184, 50, 186)",
        borderColor: "rgba(184, 50, 186, 0.2)",
      },
      {
        label: "2019",
        data: [14, 47, 70, 59, 78, 80, 91, 125, 28, 28, 29, 38],
        fill: false,
        backgroundColor: "rgb(209, 123, 48)",
        borderColor: "rgba(209, 123, 48, 0.2)",
      },
      {
        label: "2020",
        data: [19, 0, 55, 129, 185, 111, 144, 115, 34, 0, 143, 88],
        fill: false,
        backgroundColor: "rgb(115, 11, 9)",
        borderColor: "rgba(115, 11, 9, 0.2)",
      },
      {
        label: "2021",
        data: [
          115.48, 143.14, 159.41, 76, 64.77, 225.55, 45.35, 195.95, 150.99,
          58.89, 33.3, 0,
        ],
        fill: false,
        backgroundColor: "rgb(252, 196, 140)",
        borderColor: "rgba(252, 196, 140, 0.2)",
      },
      {
        label: "2022",
        data: [
          204.55, 45.67, 51.49, 63.18, 89.6, 107.31, 170.43, 115.32, 51.5, 27.8,
          18.86, 26.77,
        ],
        fill: false,
        backgroundColor: "rgb(58, 247, 58)",
        borderColor: "rgba(58, 247, 58, 0.2)",
      },
      {
        label: "2023",
        data: [131, 115, 5, 58, 172, 128, 56, 16, 7.77, 18, 37, 0],
        fill: false,
        backgroundColor: "rgb(220, 171, 238)",
        borderColor: "rgba(220, 171, 238, 0.2)",
      },
      {
        label: "2024",
        data: [
          januaryDistance,
          februaryDistance,
          marchDistance,
          aprilDistance,
          mayDistance,
          juneDistance,
          julyDistance,
          augustDistance,
          septemberDistance,
          octoberDistance,
          novemberDistance,
          decemberDistance,
        ],
        fill: false,
        backgroundColor: "rgb(249, 252, 49)",
        borderColor: "rgba(249, 252, 49, 0.2)",
      },
    ],
  };

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
  };

  return (
    <div className='chart'>
      <Line data={data} options={options} />
    </div>
  );
}

export default MonthlyMileage;
