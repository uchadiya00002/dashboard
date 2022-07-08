import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Avatar, Drawer } from "@mui/material";
import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import {
  MdDashboard,
  MdShoppingBag,
  MdOutlineCancelPresentation,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { FaReceipt, FaUserAlt } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsFillDoorOpenFill, BsFillChatLeftFill } from "react-icons/bs";
import Navbar from "./Navbar";

const SideSection = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
      <IconButton
        size="large"
        edge="top"
        color="inherit"
        aria-label="logo"
        onClick={() => setToggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={toggleDrawer}
        className=""
        onClick={() => setToggleDrawer(!toggleDrawer)}
        variant="permanent"
      >
        <Box
          p={2}
          role="presentation"
          className={`bg-[#03045E] min-h-full flex flex-col  w-[280px]   ${
            toggleDrawer ? null : "w-[75px]"
          }`}
        >
          {!toggleDrawer ? (
            <Typography
              component="div"
              className="text-base font-bold text-white text-center"
            >
              LOGO
            </Typography>
          ) : (
            <Typography
              variant="h6"
              component="div"
              className="text-2xl font-bold text-white text-center"
            >
              LOGO
            </Typography>
          )}
          {!toggleDrawer ? (
            <div
              className="text-[#9CAABF] flex justify-center items-center my-2.5  "
              onClick={() => setToggleDrawer(false)}
            >
              <MenuIcon />
            </div>
          ) : (
            <div
              className="text-[#9CAABF] flex justify-end items-end my-1 "
              onClick={() => setToggleDrawer(false)}
            >
              <ChevronLeftIcon className="ml-auto" />
            </div>
          )}

          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <AiFillHome />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <AiFillHome />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">Home</p>
            </div>
          )}

          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <MdDashboard />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <MdDashboard />
              </IconButton>
              <p className="text-lg text-icon-gray text-center">Dashboard</p>
            </div>
          )}

          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <MdShoppingBag />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <MdShoppingBag />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">Orders</p>
            </div>
          )}

          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <FaReceipt />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <FaReceipt />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">Invoices</p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="text-[#9CAABF] font-medium flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <BsFillDoorOpenFill />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <BsFillDoorOpenFill />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">
                Collabration Room
              </p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="text-[#9CAABF]  flex justify-start items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <MdOutlineCancelPresentation />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <MdOutlineCancelPresentation />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">Rejections</p>
            </div>
          )}

          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <BsFillChatLeftFill />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <BsFillChatLeftFill />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">Chat Box</p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <RiUserSettingsFill />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <RiUserSettingsFill />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">
                Administration
              </p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="text-[#9CAABF] flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <RiUserSettingsFill />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <RiUserSettingsFill />
              </IconButton>
              <p className="text-lg   text-icon-gray text-start">
                Manage Supplier Expedition
              </p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="text-[#9CAABF] font-medium flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <AiTwotoneSetting />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <AiTwotoneSetting />
              </IconButton>
              <p className="text-lg   text-icon-gray text-center">Settings </p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="text-[#9CAABF] font-medium flex justify-center items-center mb-0.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <FaUserAlt />
              </IconButton>
            </div>
          ) : (
            <div className="text-[#9CAABF] font-medium flex justify-start items-center mb-1.5 cursor-pointer">
              <IconButton color="inherit" aria-label="logo" className="mx-1">
                <FaUserAlt />
              </IconButton>
              <p className="text-lg  text-icon-gray text-center">Account</p>
            </div>
          )}
          {!toggleDrawer ? (
            <div className="mt-auto flex justify-center text-[#9CAABF]">
              <IconButton color="inherit" aria-label="logo" className="ml-auto">
                <MdLogout />
              </IconButton>
            </div>
          ) : (
            <div className="mt-auto font-medium flex justify-center text-[#9CAABF]">
              <div className="flex flex-row justify-center items-center">
                <Avatar>L</Avatar>
                <p className="text-lg ml-2">Anvita</p>
              </div>
              <IconButton color="inherit" aria-label="logo" className="ml-auto">
                <MdLogout />
              </IconButton>
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default SideSection;
