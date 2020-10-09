import React from "react";
import { Line } from "react-chartjs-2";
export default function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Fed",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Applied 2019(M)",
        data: [30, 12, 41, 25, 20, 47, 39, 12, 21, 6, 13, 19],
        borderColor: ["rgba(0,178,255,0.4)"],
        backgroundColor: ["rgba(0,178,255,0.4)"],
        pointBackgroundColor: ["rgba(0,178,255,0.4)"],
        pointBorderColor: ["rgba(0,178,255,0.4)"],
      },
      {
        label: "Left 2019(M)",
        data: [21, 34, 20, 16, 32, 17, 45, 40, 10, 15, 11, 12],
        borderColor: ["rgba(255, 122, 0, 0.4)"],
        backgroundColor: ["rgba(255, 122, 0, 0.4)"],
        pointBackgroundColor: ["rgba(255, 122, 0, 0.4)"],
        pointBorderColor: ["rgba(255, 122, 0, 0.4)"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: {
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10,
        },
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
