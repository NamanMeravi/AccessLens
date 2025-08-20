import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import Button2Icons from "../Button/Button2Icons";

const projects = [
  { name: "Project 1", projectId: "1" },
  { name: "Project 2", projectId: "2" },
  { name: "Project 3", projectId: "3" },
];

const NavDashboard = ({ toggleNavBar }) => {
  return (
    <div className="p-5 bg-[#1a1728] flex flex-col justify-between h-full text-[#C0DADC]">
      <div>
        <header className="flex justify-between">
          <Link to="/dashboard/home">
            <button className="flex items-center gap-2 cursor-pointer">
              <Logo size="35" noMargin={true} />
            </button>
          </Link>
          <Button2Icons
            handleOnClick={toggleNavBar}
            defaultIcon={<TbLayoutSidebarLeftCollapse />}
            hoverIcon={<TbLayoutSidebarLeftCollapseFilled />}
          />
        </header>
        <main className="mt-8">
          <h1 className="text-[#c0dadc7e]">Recent Projects</h1>
          <ul className="flex flex-col gap-1.5 mt-2">
            {projects.map((project) => (
              <Link to={`project/${project.projectId}`}>
                <button className="w-full cursor-pointer flex text-md items-center gap-2 p-1 rounded-2xl bg-transparent border border-[#ffffff25] hover:bg-[#ffffff25]">
                  <span className="rounded-xl p-2.5 text-xl bg-[#1a1728]">
                    <AiOutlineFundProjectionScreen />
                  </span>
                  <span>{project.name}</span>
                </button>
              </Link>
            ))}
          </ul>
        </main>
      </div>
      <footer className="border-t-1 border-[#ffffff31] pt-5">
        <Link to="/dashboard/account">
          <button className="w-full flex items-center gap-2 p-2 rounded-2xl bg-[#ffffff1b] cursor-pointer hover:bg-[#ffffff25]">
            <span className="rounded-xl p-2.5 text-xl bg-[#1a1728]">
              <MdOutlineManageAccounts />
            </span>
            <span className="text-md">Account</span>
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default NavDashboard;
