import React, { useState } from "react";
import {
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Switch,
} from "@mui/material";
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { Visibility } from "@mui/icons-material";

const allStatus = [
  {
    value: "orderded",
    label: "ORDERED",
  },
  {
    value: "ordering",
    label: "ORDERING",
  },
  {
    value: "unOrdered",
    label: "UN ORDERED",
  },
  {
    value: "orderCanceled",
    label: "ORDER CANCELED",
  },
  {
    value: "orderedWithError",
    label: "ORDERED WITH ERROR",
  },
];

function createData(
  order,
  orderDate,
  description,
  supplierId,
  supplierName,
  deliveryDate,
  status,
  criticalParts,
  actions
) {
  return {
    order,
    orderDate,
    description,
    supplierId,
    supplierName,
    deliveryDate,
    status,
    criticalParts,
    actions,
  };
}

const rows = [
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "ordered",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center">
      <Visibility className="mr-2" />
      <BiImport size={20} />
    </div>
  ),
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "ordering",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center">
      <Visibility className="mr-2" />
      <BiImport size={20} />
    </div>
  ),
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "unOrdered",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center">
      <Visibility className="mr-2" />
      <BiImport size={20} />
    </div>
  ),
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "orderCanceled",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center">
      <Visibility className="mr-2" />
      <BiImport size={20} />
    </div>
  ),
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "orderedWithError",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center">
      <Visibility className="mr-2" />
      <BiImport size={20} />
    </div>
  ),
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "ordered",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center text-[#6B7280]">
      <Visibility className="mr-2" size={5} />
      <BiImport size={15} />
    </div>
  ),
  createData(
    "PO-2345676789",
    "06-04-2022",
    "some description",
    "Supplier Id",
    "Supplier Name",
    "06-04-2022",
    "ordered",
    <Switch defaultChecked />,
    <div className="flex justify-center items-center">
      <Visibility className="mr-2" />
      <BiImport size={20} />
    </div>
  ),
];
const orderDetails = () => {
  const [status, setStatus] = useState("");

  return (
    <div className=" m-10  ">
      <div className="flex m-10  ">
        <h1 className="text-xl font-bold">Purchase Order</h1>
        <Button
          variant="text"
          startIcon={<BiImport size={18} />}
          className="ml-auto normal-case text-[#03045E] text-sm"
        >
          Export
        </Button>
      </div>
      <div>
        <h1>Orders</h1>
        <h1>Supplier A</h1>
        <h1> Supplier 4587</h1>
      </div>
      <div className="flex mb-5 ">
        <p className="ml-auto py-2 text-lg text-[#65748B]">Filter:</p>
        <TextField
          size="small"
          className=" w-80  mx-3"
          id="outlined-select-currency"
          select
          label="All status"
          value={status}
          //   onChange={() => setStatus(e.target.value)}
        >
          {allStatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <TextField
            size="small"
            className="mx-3"
            id="input-with-icon-textfield"
            label="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Toggle password visibility">
                    <AiOutlineSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="mx-1">
            <AiOutlineLeft />
          </button>
          <p>{rows.length}</p>
          <button className="mx-1">
            <AiOutlineRight />
          </button>
        </div>
        <TextField
          size="small"
          className=" w-32 mx-5"
          id="outlined-select-currency"
          select
          label="10/page"
          value={status}
          onChange={() => setStatus(e.target.value)}
        >
          {allStatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-0">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full ">
                <thead className="bg-[#F3F4F6] text-left  px-5">
                  <tr>
                    <th scope="col" class="text-sm  font-medium">
                      <label>
                        <input type="checkbox" className="mr-3 my-3 " />
                        ORDER
                      </label>
                    </th>
                    <th scope="col" class="text-sm font-medium ">
                      ORDER DATE
                    </th>
                    <th scope="col" class="text-sm font-medium  ">
                      DESCRIPTION
                    </th>
                    <th scope="col" class="text-sm font-medium ">
                      SUPPLIER ID
                    </th>
                    <th scope="col" class="text-sm font-medium ">
                      SUPPLIER NAME
                    </th>
                    <th scope="col" class="text-sm font-medium  ">
                      DELIVERY DATE
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 ">
                      STATUS
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 ">
                      CRITICAL PARTS
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 ">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr>
                      <td className="pr-3 py-2 whitespace-nowrap text-sm text-left ">
                        <label>
                          <input type="checkbox" className="mr-3 my-3 " />

                          {row.order}
                        </label>
                      </td>
                      <td className="text-sm whitespace-nowrap ">
                        {row.orderDate}
                      </td>
                      <td className="text-sm    whitespace-nowrap">
                        {row.description}
                      </td>
                      <td className="text-sm   whitespace-nowrap">
                        {row.supplierId}
                      </td>
                      <td className="text-sm  whitespace-nowrap">
                        {row.supplierName}
                      </td>
                      <td className="text-sm  whitespace-nowrap">
                        {row.deliveryDate}
                      </td>
                      <td className="text-sm whitespace-nowrap">
                        {row.status === "ordered" ? (
                          <p className="text-[#00AA57]">ORDERED</p>
                        ) : row.status === "ordering" ? (
                          <p className="text-[#5196DB]">ORDERING</p>
                        ) : row.status === "unOrdered" ? (
                          <p className="text-[#F85D79]">UN ORDERING</p>
                        ) : row.status === "orderCanceled" ? (
                          <p className="text-[#DD1407]">ORDER CANCELED</p>
                        ) : row.status === "orderedWithError" ? (
                          <p className="text-[#5196DB]">ORDERED WITH ERROR</p>
                        ) : null}
                      </td>
                      <td className="text-sm  whitespace-nowrap justify-center">
                        {row.criticalParts}
                      </td>
                      <td className="text-sm  whitespace-nowrap  px-auto mx-auto text-center">
                        {row.actions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orderDetails;
