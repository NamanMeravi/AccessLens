import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import MyTextField from "../../MUI/MyTextField";
import DescriptionBox from "../../MUI/MyDescriptionBox";
import MyButton from "../../Button/MyButton";

const CreateProjectModalContent = ({ handleFormSubmit }) => {
  return (
    <div className="text-[#C0DADC] w-[450px] p-12 px-14">
      <h2 className="text-[22px] font-semibold flex items-center gap-3">
        <AiOutlineFundProjectionScreen size={25} />
        Create Project
      </h2>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-8">
        <MyTextField
          label={"URL"}
          placeholder={"https://mydomain.com"}
          labelBgColor="#162844"
          borderRadius={12}
        />
        <MyTextField
          label={"Name"}
          placeholder={"my project name"}
          labelBgColor="#162844"
          borderRadius={12}
          required={false}
        />
        <DescriptionBox
          label={"Description"}
          placeholder={"Description"}
          labelBgColor="#162844"
        />
        <MyButton>Create</MyButton>
      </form>
    </div>
  );
};

export default CreateProjectModalContent;
