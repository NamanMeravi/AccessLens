import { Outlet } from "react-router";
import NavDashboard from "../components/Dashboard/NavDashboard";
import { useState } from "react";
import { motion } from "framer-motion";
import Button2Icons from "../components/Button/Button2Icons";
import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";

const Dashboard = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);
  const toggleNavBar = () => setIsNavBarOpen((prev) => !prev);
  return (
    <div className="flex relative bg-gray">
      <motion.div
        layout
        className={`bg-red-100 h-screen sticky top-0 overflow-hidden ${
          isNavBarOpen ? "w-1/5" : "w-0"
        }`}
      >
        <NavDashboard toggleNavBar={toggleNavBar} />
      </motion.div>

      <motion.div
        layout
        className={`py-10 ${
          isNavBarOpen ? "px-15" : "px-25"
        } min-h-screen bg-gradient-to-tr from-[#121821] via-[#122543] to-[#1c2c45] ${
          isNavBarOpen ? "w-4/5" : "w-full"
        }`}
      >
        <Outlet />
      </motion.div>

      {!isNavBarOpen && (
        <span className="fixed top-11 left-4">
          <Button2Icons
            handleOnClick={toggleNavBar}
            defaultIcon={<TbLayoutSidebarRightCollapse />}
            hoverIcon={<TbLayoutSidebarRightCollapseFilled />}
          />
        </span>
      )}
    </div>
  );
};

export default Dashboard;
