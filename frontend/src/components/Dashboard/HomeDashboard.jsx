import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import Button2Icons from "../Button/Button2Icons";
import MyBadge from "../MUI/MyBadge";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import MyIconButton from "../Button/MyIconButton";
import { projects } from "./NavDashboard";
import MyProjectCard from "../Animation/MyProjectCard";
import MySearch from "../Other/MySearch";
import { Link } from "react-router";
import MyModal from "../Other/MyModal";
import { useState } from "react";
import MyTextField from "../MUI/MyTextField";
import DescriptionBox from "../MUI/MyDescriptionBox";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import CreateProjectModalContent from "./Project/CreateProjectModalContent";

const HomeDashboard = () => {
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(false);
  const [openNotificationModal, setOpenNotificationModal] = useState(false);
  const toggleCreateProjectModal = () => {
    setOpenCreateProjectModal((prev) => !prev);
  };
  const toggleNotificationModal = () => {
    setOpenNotificationModal((prev) => !prev);
  };
  // Submit Form handler
  const handleFormSubmit = async (e) => {};
  return (
    <div className="text-[#C0DADC]">
      {/* Welcome Text + Notification */}
      <header className="flex justify-between items-start pb-3 border-b-10 border-[#ff000010]">
        <div>
          <h1 className="text-3xl font-semibold">Hello, Anish</h1>
          <h2 className="text-[#c0dadc93]">
            Track accessibility performance of your projects here!
          </h2>
        </div>
        {/* <span
          className="rounded-full p-1.5 bg-[#ffffff1d]"
          onClick={toggleNotificationModal}
        >
          <MyBadge badgeValue={1} bgColor="#3c63c6">
            <Button2Icons
              handleOnClick={() => {}}
              defaultIcon={<IoNotificationsOutline />}
              hoverIcon={<IoNotificationsSharp />}
            />
          </MyBadge>
        </span> */}
      </header>

      {/* Search + All Projects */}
      <main className="mt-15">
        {/* Search bar + Create project */}
        <section className=" flex gap-5 items-center">
          <MySearch />
          <MyIconButton
            icon={<IoMdAdd />}
            handleOnClick={toggleCreateProjectModal}
          >
            Project
          </MyIconButton>
        </section>

        {/* All Projects */}
        <h1 className="mt-15 font-semibold">Your projects</h1>
        <section className="flex gap-x-3 gap-y-4 mt-5 flex-wrap">
          {projects.map((project) => (
            <Link to={`/dashboard/project/${project.projectId}`}>
              <MyProjectCard project={project} />
            </Link>
          ))}
        </section>
      </main>

      {/* New Project Modal */}
      <MyModal
        isOpen={openCreateProjectModal}
        onClose={toggleCreateProjectModal}
        bgColor="#162844"
      >
        <CreateProjectModalContent handleFormSubmit={handleFormSubmit} />
      </MyModal>

      {/* Notification Modal */}
      <MyModal
        isOpen={openNotificationModal}
        onClose={toggleNotificationModal}
        bgColor="#162844"
      >
        <h2 className="text-xl font-semibold text-white">Notification</h2>
        <p className="mt-2 text-gray-600">This is a clean modal.</p>
      </MyModal>
    </div>
  );
};

export default HomeDashboard;
