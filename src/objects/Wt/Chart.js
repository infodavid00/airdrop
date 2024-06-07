"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const WTCHARTS = ({ data }) => {
  const chartData = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: data,
        borderColor: "rgba(0, 192, 0, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default WTCHARTS;
