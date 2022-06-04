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
import { COLOR } from "../constants";

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
const info = labels.map(() => faker.datatype.number({ min: 0, max: 500 }));
const max = Math.max(...info);

export const data = {
  labels,
  datasets: [
    {
      data: info,
      backgroundColor: info.map((dato: any) =>
        dato >= max ? COLOR.LTBLUE : COLOR.ORANGE
      ),
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
          <Typography variant="h4">${total}</Typography>
        </div>
        <div className="totalMonth">
          <Typography color="text.secondary">from last month</Typography>
          <Typography>
            +{Math.floor(Math.random() * (1000 - 100) + 100) / 100}%
          </Typography>
        </div>
      </div>
    </>
  );
}
