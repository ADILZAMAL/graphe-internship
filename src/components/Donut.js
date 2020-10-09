import React from "react";
import { Doughnut } from "react-chartjs-2";
export default function Donut() {
  const data = {
    labels: ["Group fo 20", "Group of 10", "Group of 5", "Individual"],
    datasets: [
      {
        label: "Applied 2019(M)",
        data: [20, 20, 15, 17],
        backgroundColor: ["#00B2FF", "#FFB800", "#FF4C61", "#33D69F"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRation: true,
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
