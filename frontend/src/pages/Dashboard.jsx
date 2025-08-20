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
    <div className="flex relative">
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
        className={`bg-[#1d2736] min-h-screen ${
          isNavBarOpen ? "w-4/5" : "w-full"
        }`}
      >
        <Outlet />
      </motion.div>
      {!isNavBarOpen && (
        <span className="fixed top-4 left-4">
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
