import { Outlet } from "react-router";
import NavDashboard from "../components/Dashboard/NavDashboard";

const Dashboard = () => {
  return (
    <div>
      <NavDashboard />
      <Outlet />
    </div>
  );
};

export default Dashboard;
