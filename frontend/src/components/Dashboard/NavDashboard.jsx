import React from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import Button2Icons from "../Button/Button2Icons";
import SiteFavicon from "./SiteFavicon";
import { extractSiteName } from "../../utils/extractSiteName";
import { trimString } from "../../utils/trimString";

export const projects = [
  {
    url: "https://dribbble.com/",
    projectId: "1",
    name: extractSiteName("https://dribbble.com/"),
    favIcon: <SiteFavicon url="https://dribbble.com/" w={5} />,
  },
  {
    url: "https://mui.com/",
    projectId: "2",
    name: extractSiteName("https://mui.com/"),
    favIcon: <SiteFavicon url="https://mui.com/" w={5} />,
  },
  {
    url: "https://chatgpt.com/",
    projectId: "3",
    name: extractSiteName("https://chatgpt.com/"),
    favIcon: <SiteFavicon url="https://chatgpt.com/" w={5} />,
  },
  {
    url: "https://github.com/",
    projectId: "4",
    name: extractSiteName("https://github.com/"),
    favIcon: <SiteFavicon url="https://github.com/" w={5} />,
  },
  {
    url: "https://project-bin.netlify.app/",
    projectId: "5",
    name: extractSiteName("https://project-bin.netlify.app/"),
    favIcon: <SiteFavicon url="https://project-bin.netlify.app/" w={5} />,
  },
];

const NavDashboard = ({ toggleNavBar }) => {
  return (
    <div className="pt-10 pb-5 px-5 bg-[#1a1728] flex flex-col justify-between h-full text-[#C0DADC]">
      <div>
        <header className="flex justify-between">
          <NavLink to="/dashboard/home">
            <button className="flex items-center gap-2 cursor-pointer">
              <Logo size="35" noMargin={true} />
            </button>
          </NavLink>
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
              <NavLink
                to={`project/${project.projectId}`}
                className={({ isActive }) =>
                  `w-full cursor-pointer flex text-md items-center gap-2 p-1 rounded-2xl border 
                    ${
                      isActive
                        ? "bg-[#4D6FC4] border-[#4D6FC4] text-white"
                        : "bg-transparent border-[#ffffff25] hover:bg-[#ffffff25]"
                    }`
                }
              >
                <span className="rounded-xl p-1.5 text-xl bg-[#1a1728]">
                  {project.favIcon}
                </span>
                <span>{trimString(project.name)}</span>
              </NavLink>
            ))}
          </ul>
        </main>
      </div>
      <footer className="border-t-1 border-[#ffffff31] pt-5">
        <NavLink
          to="/dashboard/account"
          className={({ isActive }) =>
            `w-full flex items-center gap-2 p-2 rounded-2xl cursor-pointer ${
              isActive
                ? "bg-[#4D6FC4] text-white" // active state
                : "bg-[#ffffff1b] hover:bg-[#ffffff25]" // normal state
            }`
          }
        >
          <span className="rounded-xl p-2.5 text-xl bg-[#1a1728]">
            <MdOutlineManageAccounts />
          </span>
          <span className="text-md">Account</span>
        </NavLink>
      </footer>
    </div>
  );
};

export default NavDashboard;
