import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["RHB", "Maybank", "CIMB", "Public Bank", "Hong Leong Bank"];

export const data = {
  labels,
  datasets: [
    //dont use faker to generate a random number, just generate a random number with builtin package
    {
      label: "2021",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "2020",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};

export default function MyChart() {
  return <Bar data={data} options={options} />;
}
