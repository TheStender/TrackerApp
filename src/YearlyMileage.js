import React from "react";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  let januaryTotal = Number(props.distances.januaryDistance.toFixed(2));
  let februaryTotal = Number(
    (props.distances.februaryDistance + januaryTotal).toFixed(2));
  let marchTotal = Number(
    (props.distances.marchDistance + februaryTotal).toFixed(2));
  let aprilTotal = Number(
    (props.distances.aprilDistance + marchTotal).toFixed(2));
  let mayTotal = Number(
    (props.distances.mayDistance + aprilTotal).toFixed(2));
  let juneTotal = Number(
    (props.distances.juneDistance + mayTotal).toFixed(2));
  let julyTotal = Number(
    (props.distances.julyDistance + juneTotal).toFixed(2));
  let augustTotal = Number(
    (props.distances.augustDistance + julyTotal).toFixed(2));
  let septemberTotal = Number(
    (props.distances.septemberDistance + augustTotal).toFixed(2));
  let octoberTotal = Number(
    (props.distances.octoberDistance + septemberTotal).toFixed(2));
  let novemberTotal = Number(
    (props.distances.novemberDistance + octoberTotal).toFixed(2));
  let decemberTotal = Number(
    (props.distances.decemberDistance + novemberTotal).toFixed(2));

  const d = new Date();
  let currentMonth = d.getMonth();

  if (currentMonth < 1) februaryTotal = null;
  if (currentMonth < 2) marchTotal = null;
  if (currentMonth < 3) aprilTotal = null;
  if (currentMonth < 4) mayTotal = null;
  if (currentMonth < 5) juneTotal = null;
  if (currentMonth < 6) julyTotal = null;
  if (currentMonth < 7) augustTotal = null;
  if (currentMonth < 8) septemberTotal = null;
  if (currentMonth < 9) octoberTotal = null;
  if (currentMonth < 10) novemberTotal = null;
  if (currentMonth < 11) decemberTotal = null;

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
        data: [9, 9, 74, 127, 199, 423, 601, 677, 677, 681, 694, 706],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "2014",
        data: [25, 25, 25, 95, 118, 252, 302, 354, 358, 362, 369, 369],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "2015",
        data: [26, 32, 93, 163, 269, 400, 436, 502, 539, 543, 553, 553],
        fill: false,
        backgroundColor: "rgb(52, 161, 235)",
        borderColor: "rgba(52, 161, 235, 0.2)",
      },
      {
        label: "2016",
        data: [7, 13, 18, 91, 128, 156, 190, 245, 274, 285, 300, 304],
        fill: false,
        backgroundColor: "rgb(30, 201, 124)",
        borderColor: "rgba(30, 201, 124, 0.2)",
      },
      {
        label: "2017",
        data: [40, 40, 62, 95, 201, 257, 379, 405, 405, 405, 427, 427],
        fill: false,
        backgroundColor: "rgb(219, 222, 69)",
        borderColor: "rgba(219, 222, 69, 0.2)",
      },
      {
        label: "2018",
        data: [45, 62, 92, 147, 162, 181, 181, 194, 210, 210, 216, 216],
        fill: false,
        backgroundColor: "rgb(184, 50, 186)",
        borderColor: "rgba(184, 50, 186, 0.2)",
      },
      {
        label: "2019",
        data: [14, 61, 131, 190, 268, 348, 439, 564, 592, 620, 649, 687],
        fill: false,
        backgroundColor: "rgb(209, 123, 48)",
        borderColor: "rgba(209, 123, 48, 0.2)",
      },
      {
        label: "2020",
        data: [19, 19, 74, 203, 388, 499, 643, 758, 792, 792, 935, 1023],
        fill: false,
        backgroundColor: "rgb(115, 11, 9)",
        borderColor: "rgba(115, 11, 9, 0.2)",
      },
      {
        label: "2021",
        data: [
          115.48, 258.62, 418.03, 494.03, 558.8, 784.35, 829.7, 1025.65,
          1176.64, 1235.53, 1268.83, 1268.83,
        ],
        fill: false,
        backgroundColor: "rgb(252, 196, 140)",
        borderColor: "rgba(252, 196, 140, 0.2)",
      },
      {
        label: "2022",
        data: [
          204.55, 250.22, 301.71, 364.89, 454.49, 561.8, 732.23, 847.55, 899.05,
          926.85, 945.71, 972.48,
        ],
        fill: false,
        backgroundColor: "rgb(58, 247, 58)",
        borderColor: "rgba(58, 247, 58, 0.2)",
      },
      {
        label: "2023",
        data: [131, 246, 251, 309, 481, 609, 665, 681, 689, 707, 744, 744],
        fill: false,
        backgroundColor: "rgb(220, 171, 238)",
        borderColor: "rgba(220, 171, 238, 0.2)",
      },
      {
        label: "2024",
        data: [59.87, 81.04, 81.04, 138.07, 230.02, 309.55, 536.64, 563.24, 634.77, 661.96, 661.96, 669.47],
        fill: false,
        backgroundColor: "rgb(249, 252, 49)",
        borderColor: "rgba(249, 252, 49, 0.2)",
      },
      {
        label: "2025",
        data: [
          januaryTotal,
          februaryTotal,
          marchTotal,
          aprilTotal,
          mayTotal,
          juneTotal,
          julyTotal,
          augustTotal,
          septemberTotal,
          octoberTotal,
          novemberTotal,
          decemberTotal,
        ],
        fill: false,
        backgroundColor: "rgb(242, 136, 161)",
        borderColor: "rgba(242, 136, 161, 0.2)",
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

export default LineChart;
