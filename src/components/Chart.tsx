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
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  legend: {
    display: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: "rgb(210, 116, 94)",
    },
  ],
};

export function Chart() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(data.datasets[0].data.reduce((a, b) => a + b, 0));
  }, []);

  return (
    <>
      <Bar options={options} data={data} />
      <Divider />
      <br />
      <div className="container-total">
        <div className="totalMonth">
          <Typography color="text.secondary">Total this month</Typography>
          <Typography variant="h3">${total}</Typography>
        </div>
        <div className="totalMonth">
          <Typography color="text.secondary">Total this month</Typography>
          <Typography>
            +{Math.floor(Math.random() * (1000 - 100) + 100) / 100}%
          </Typography>
        </div>
      </div>
    </>
  );
}