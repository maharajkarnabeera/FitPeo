// src/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
    
  const jsonData = [
    { "day": 1, "calories": 236 },
    { "day": 2, "calories": 345 },
    { "day": 3, "calories": 278 },
    { "day": 4, "calories": 192 },
    { "day": 5, "calories": 390 },
    { "day": 6, "calories": 423 },
    { "day": 7, "calories": 220 },
    { "day": 8, "calories": 300 },
    { "day": 9, "calories": 290 },
    { "day": 10, "calories": 310 },
    { "day": 11, "calories": 400 },
    { "day": 12, "calories": 350 },
    { "day": 13, "calories": 280 },
    { "day": 14, "calories": 360 },
    { "day": 15, "calories": 330 },
    { "day": 16, "calories": 290 },
    { "day": 17, "calories": 370 },
    { "day": 18, "calories": 410 },
    { "day": 19, "calories": 380 },
    { "day": 20, "calories": 300 },
    { "day": 21, "calories": 320 },
    { "day": 22, "calories": 340 },
    { "day": 23, "calories": 295 },
    { "day": 24, "calories": 310 },
    { "day": 25, "calories": 370 },
    { "day": 26, "calories": 390 },
    { "day": 27, "calories": 305 },
    { "day": 28, "calories": 315 },
    { "day": 29, "calories": 330 },
    { "day": 30, "calories": 340 }
]
;

  const dayLabels = jsonData.map((item) => {return item.day})
  const caloriesData = jsonData.map((item) => {return item.calories})

  const data = {
    labels: dayLabels,
    datasets: [
      {
        label: "Calories",
        data: caloriesData,
        backgroundColor: ["#7294ff"],
        borderRadius: 80,
        borderSkipped: false,
        borderWidth: 1,
        maxBarThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {
        display: true,
        labels: {
          font : {
            family: "poppins"
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        title: {
            display: true,
            text: 'Days', // Label for the x-axis
            color: '#66676a',
            font : {
              family: "poppins"
            }
        },
        ticks:{
          color:"#66676a",
          font : {
            family: "poppins"
          }
        }
      },
      y: {
        grid: {
          display: true, // enable all grid lines
          drawBorder: true, // enable the border line
          drawOnChartArea: true, // Add grid lines within the chart area
          drawTicks: false,
          color:"#66676a" // Remove the ticks
        },
        title: {
            display: false,
            text: 'Calories', // Label for the y-axis
            color: '#66676a',
        },
        border: {
          display: false // Add y-axis border line
        },
        beginAtZero: true,
        ticks:{
          color:"#66676a",
          font : {
            family: "poppins"
          }
        }
      },
    },
  };

  return (
    <div className="bg-[#202028] rounded-md text-gray-300 p-8 font-poppins">
      <div className="font-poppins">
        <h2 className=" pb-4 font-bold">Activity</h2>
      </div>
      <div className="h-48 sm:h-[200px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;