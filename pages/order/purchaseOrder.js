import React, { useState } from "react";
import {
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Switch,
  alpha,
  styled,
  FormControlLabel,
} from "@mui/material";
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { Visibility } from "@mui/icons-material";
import { $axios, $baseURL } from "../../components/axios/axios";
import SideSection from "../../components/UI/SideSection";

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

const CriticalPartsSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex  items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex justify-cemter items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex justify-cemter items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex justify-cemter items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex justify-cemter items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex justify-cemter items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
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
    <div className="flex justify-center items-center  ">
      <CriticalPartsSwitch defaultChecked />
    </div>,
    <div className="flex justify-cemter items-center text-[#6B7280]">
      <Visibility className="mr-2" fontSize="medium" />
      <BiImport size={18} />
    </div>
  ),
];

const purchaseOrder = () => {
  const getPurchaseOrder = () => {
    $axios
      .get(`${$baseURL}/getPurchaseOrderList`)
      .then((res) => {
        // router.push("/dashboard/dashboard");

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [status, setStatus] = useState("");

  return (
    <>
      <div className=" bg-[#fff] h-full w-[100%]">
        <div className=" w-screen">
          <div className="flex py-10 mx-5">
            <h1 className="text-2xl font-bold">Purchase Order</h1>
            <Button
              onClick={() => getPurchaseOrder()}
              variant="text"
              startIcon={<BiImport size={20} />}
              className="ml-auto normal-case text-[#03045E] text-lg"
            >
              Export
            </Button>
          </div>
          <div className="bg-white px-5 py-3 ">
            <div className="flex flex-col md:flex-row my-5">
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
              <div className="flex justify-center items-center text-[#65748B] text-lg">
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
                className=" w-32 ml-5"
                id="outlined-select-currency"
                select
                label="10/page"
                value={status}
                // onChange={() => setStatus(e.target.value)}
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
                <div class="py-2 inline-block min-w-full sm:px-3">
                  <div class="overflow-hidden">
                    <table class="min-w-full ">
                      <thead className="bg-[#F3F4F6] text-left  p-5">
                        <tr className="mx-2">
                          <th
                            scope="col"
                            class="text-sm mx-2 font-medium pl-6 "
                          >
                            <label>
                              <input type="checkbox" className="mr-3 my-3 " />
                              ORDER
                            </label>
                          </th>
                          <th scope="col" class="text-sm mx-2 font-medium ">
                            ORDER DATE
                          </th>
                          <th scope="col" class="text-sm mx-2 font-medium  ">
                            DESCRIPTION
                          </th>
                          <th scope="col" class="text-sm mx-2 font-medium ">
                            SUPPLIER ID
                          </th>
                          <th scope="col" class="text-sm mx-2 font-medium ">
                            SUPPLIER NAME
                          </th>
                          <th scope="col" class="text-sm  mx-2 font-medium  ">
                            DELIVERY DATE
                          </th>
                          <th scope="col" class="text-sm mx-2 font-medium  ">
                            STATUS
                          </th>
                          <th
                            scope="col"
                            class="text-sm mx-2 font-medium text-center "
                          >
                            CRITICAL PARTS
                          </th>
                          <th scope="col" class="text-sm mx-2 font-medium  ">
                            ACTIONS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr>
                            <td className="pr-3 py-2 pl-6 mx-2 whitespace-nowrap text-sm text-left ">
                              <label>
                                <input
                                  type="checkbox"
                                  className="mr-3 my-3  "
                                />

                                {row.order}
                              </label>
                            </td>
                            <td className="text-sm whitespace-nowrap mx-2 ">
                              {row.orderDate}
                            </td>
                            <td className="text-sm  mx-2  whitespace-nowrap">
                              {row.description}
                            </td>
                            <td className="text-sm mx-2  whitespace-nowrap">
                              {row.supplierId}
                            </td>
                            <td className="text-sm mx-2 whitespace-nowrap">
                              {row.supplierName}
                            </td>
                            <td className="text-sm  mx-2 whitespace-nowrap">
                              {row.deliveryDate}
                            </td>
                            <td className="text-sm mx-2 whitespace-nowrap">
                              {row.status === "ordered" ? (
                                <p className="text-[#00AA57]">ORDERED</p>
                              ) : row.status === "ordering" ? (
                                <p className="text-[#5196DB]">ORDERING</p>
                              ) : row.status === "unOrdered" ? (
                                <p className="text-[#F85D79]">UN ORDERING</p>
                              ) : row.status === "orderCanceled" ? (
                                <p className="text-[#DD1407]">ORDER CANCELED</p>
                              ) : row.status === "orderedWithError" ? (
                                <p className="text-[#5196DB]">
                                  ORDERED WITH ERROR
                                </p>
                              ) : (
                                row.status
                              )}
                            </td>
                            <td className="text-sm mx-2 whitespace-nowrap ">
                              {row.criticalParts}
                            </td>
                            <td className="text-sm mx-2 whitespace-nowrap  px-2 text-center">
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
        </div>
      </div>
    </>
  );
};

export default purchaseOrder;
