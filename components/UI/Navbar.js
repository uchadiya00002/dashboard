import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import {
  AiFillHome,
  AiFillPrinter,
  AiFillBell,
  AiTwotoneSetting,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = ({ toggleDrawer }) => {
  return (
    <div className="w-full shadow-lg sticky">
      <div
        className={`bg-white flex justify-between  w-[90%] relative m-auto  py-3 `}
      >
        <div className="">
          <TextField
            size="small"
            className={`w-96 ${!toggleDrawer ? "ml-3" : "ml-56"}`}
            id="input-with-icon-textfield"
            label="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <AiOutlineSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex justify-center items-center gap-4 text-[#6B7280] ml-2">
          <AiFillPrinter size={28} />
          <AiFillBell size={28} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
