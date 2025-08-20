import { Outlet } from "react-router";
import NavDashboard from "../components/Dashboard/NavDashboard";

const Dashboard = () => {
  return (
    <div className="flex relative">
      <div className="bg-red-100 w-2/10 h-screen sticky top-0">
        <NavDashboard />
      </div>
      <div className="bg-blue-100 w-8/10 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
