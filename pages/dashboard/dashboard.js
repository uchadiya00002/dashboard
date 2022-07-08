import React from "react";
import { Button, Card } from "@mui/material";
import { MdAspectRatio } from "react-icons/md";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function createData(name, calories, fat, carbs, protein, data1, data2) {
  return { name, calories, fat, carbs, protein, data1, data2 };
}

const rows = [
  createData("Supplier A", 5, 2, 1, 4.0, 1, 1),
  createData("Supplier B", 43, 2, 3, 4.0, 2, 2),
  createData("Supplier C", 40, 10, 0, 4.0, 10, 1),
  createData("Supplier D", 5, 2, 1, 4.0, 1, 1),
  createData("Supplier D", 5, 2, 1, 4.0, 1, 1),
];

const options = {
  responsive: true,
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Suppliers by Delayed Deliveries",
    },
  },
};

const verticalBarOptions = {
  responsive: true,
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
      // position: "bottom",
    },
    title: {
      display: true,
      text: "POs for supply by supplier",
    },
  },
};

const doughnutLabels = {
  id: "doughnutLabels",
  afterDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
  },
};

const dougnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "60",
  plugins: {
    legend: { position: "bottom" },
    title: {
      display: true,
      text: "Purchase Order Status to Date",
    },
    plugins: [doughnutLabels],
  },
  labels: {
    render: "percentage",
    precision: 2,
  },
};
const labels = ["SUPPLIER A", "SUPPLIER B", "SUPPLIER C", "SUPPLIER D"];

const barData = {
  labels,
  datasets: [
    {
      data: [55, 60, 75, 100],

      backgroundColor: "#03045E",
    },
  ],
  maintainAspectRatio: false,
};
const dougnutData = {
  datasets: [
    {
      label: "# of Votes",
      data: [65, 14, 1],
      backgroundColor: ["#5196DB", " #0A9878", "#F17B33"],
      borderColor: ["#5196DB", " #0A9878", "#F17B33"],

      borderWidth: 2,
    },
  ],
  labels: ["Approved", "Rejected", "Pending"],
};

const dashboard = () => {
  return (
    <div className="p-5 bg-[#E5E5E5] h-screen ">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex flex-row justify-between mt-5 h-[50%]">
        <Card className="w-[65%] mr-[] ">
          <div className="flex flex-col p-4 ">
            <div className=" flex flex-row my-2">
              <h2 className="text-lg font-semibold">Orders (Aging Report)</h2>
              <Button
                className=" bg-[#03045E] hover:bg-[#0e106a] py-2 font-semibold normal-case  rounded-lg ml-auto"
                variant="contained"
              >
                View All
              </Button>
            </div>
            <div className=" flex flex-row mt-2 ">
              <p>Orders Per Supplier</p>
              <button className="ml-auto mr-1">
                <MdAspectRatio size={30} color="#6B7280" />
              </button>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-0">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full ">
                    <thead className="bg-[#F3F4F6]">
                      <tr className="text-left">
                        <th scope="col" class="text-sm  font-medium px-6 py-2">
                          SUPPLIER
                        </th>
                        <th scope="col" class="text-sm font-medium px-6 py-2">
                          FOR DELIVERY
                        </th>
                        <th scope="col" class="text-sm font-medium  px-6 py-2">
                          DELAYED
                        </th>
                        <th scope="col" class="text-sm font-medium  px-6 py-2">
                          DUE IN 7D
                        </th>
                        <th scope="col" class="text-sm font-medium  px-6 py-2">
                          DUE IN 7-14D
                        </th>
                        <th scope="col" class="text-sm font-medium  px-6 py-2">
                          DUE IN 14-20D
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-3"
                        >
                          DUE IN 30+
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-left px-6 py-2">
                      {rows.map((row) => (
                        <tr>
                          <td className="px-6 py-2 whitespace-nowrap text-sm text-left ">
                            {row.name}
                          </td>
                          <td className="text-sm whitespace-nowrap text-left px-6 py-2">
                            {row.calories}
                          </td>
                          <td className="text-sm text-[#F85D79] text-left px-6 py-2 whitespace-nowrap">
                            {row.fat}
                          </td>
                          <td className="text-sm text-[#F17B33] text-left px-6 py-2 whitespace-nowrap">
                            {row.carbs}
                          </td>
                          <td className="text-sm text-[#F17B33] text-left px-6 py-2 whitespace-nowrap">
                            {row.protein}
                          </td>
                          <td className="text-sm text-[#0A9878] text-left px-6 py-2 whitespace-nowrap">
                            {row.data1}
                          </td>
                          <td className="text-sm text-[#0A9878] text-left px-6 py-3 whitespace-nowrap">
                            {row.data2}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="justify-items-end p-5 ml-auto">
          <Doughnut
            className="col-span-1 w-[450px] flex-col-reverse "
            data={dougnutData}
            options={dougnutOptions}
          />
        </Card>
      </div>
      <div className="flex flex-row justify-between  mt-5 mb-4">
        <Card className="col-span-1  w-[450px] p-4 mr-2">
          <Bar options={options} data={barData} />
        </Card>
        <Card className="col-span-1 w-[450px]  p-4 mr-2">
          <Bar options={verticalBarOptions} data={barData} />
        </Card>
        <Card className="col-span-1 w-[450px] p-4 ">
          <Bar options={options} data={barData} />
        </Card>{" "}
      </div>
    </div>
  );
};

export default dashboard;
