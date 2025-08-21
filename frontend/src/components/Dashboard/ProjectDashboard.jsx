import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GooeyNav from "../Animation/GooeyNav";
import { TbReportAnalytics } from "react-icons/tb";
import ProjectAnalysis from "./Project/ProjectAnalysis";
import ProjectSettings from "./Project/ProjectSettings";

const items = [
  {
    label: "Analysis",
    icon: <TbReportAnalytics />,
    content: <ProjectAnalysis />,
  },
  {
    label: "Settings",
    icon: <TbReportAnalytics />,
    content: <ProjectSettings />,
  },
];

const ProjectDashboard = () => {
  const [openTab, setOpenTab] = useState(0);
  const { projectName } = useParams();

  return (
    <div className="text-[#C0DADC]">
      {/* Welcome Text + Notification */}
      <header className="flex justify-between items-start pb-3 border-b-10 border-[#ff000010]">
        <div>
          <h1 className="text-2xl font-semibold">Project {projectName}</h1>
        </div>
      </header>

      {/* Tab switchers */}
      <div className="mt-8">
        <GooeyNav
          setOpenTab={setOpenTab}
          items={items}
          particleCount={8}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={300}
          timeVariance={1500}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Tab content */}
      <div className="mt-8 rounded-2xl">{items[openTab].content}</div>
    </div>
  );
};

export default ProjectDashboard;
