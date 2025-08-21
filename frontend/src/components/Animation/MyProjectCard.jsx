import React from "react";
import TiltedCard from "./TiltedCard";
import MyBadge from "../MUI/MyBadge";
import SiteFavicon from "../Dashboard/SiteFavicon";
import { trimString } from "../../utils/trimString";

const MyTiltCard = ({ project }) => {
  return (
    <TiltedCard className="bg-gradient-to-tr from-[#051937] via-[#122543] to-[#1f324f] p-2 text-white">
      <div className="bg-gray-700 w-[240px] p-5 rounded-lg cursor-pointer">
        <header className="flex gap-5 items-center text-lg">
          <MyBadge badgeValue={1} max={99} bgColor="#3C63C6">
            <SiteFavicon url={project.url} />
          </MyBadge>
          <span>{trimString(project.name)}</span>
        </header>
        <div className="text-[#d0e6f851] leading-[19px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
          asperiores!
        </div>
        <footer className="mt-4">02 July 2025</footer>
      </div>
    </TiltedCard>
  );
};

export default MyTiltCard;
