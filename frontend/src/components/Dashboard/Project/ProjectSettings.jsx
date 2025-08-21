import React from "react";

const ProjectSettings = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="bg-[#0b022557] rounded-2xl p-8">
        <h1 className="text-[23px] font-semibold">General</h1>

        <div className="mt-5 border-t-1 border-[#ffffff27] flex justify-between items-center pt-1">
          <div>
            <header className="font-semibold text-white">Project name</header>
            <footer className="mt-2 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type here..."
                className="w-full px-3 py-1 border-1 border-gray-500 rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />

              <button className="cursor-pointer border-1 py-1 px-3 rounded-md bg-[#212830] border-[#ffffff53] text-[#2348b6] font-semibold text-[15px] hover:bg-[#2348b6] hover:text-white hover:border-[#2348b6]">
                Rename
              </button>
            </footer>
          </div>
        </div>

        <div className="mt-8 border-t-1 border-[#ffffff27] flex justify-between items-center pt-1">
          <div>
            <header className="font-semibold text-white">Project url</header>
            <footer className="mt-2 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type here..."
                className="w-full px-3 py-1 border-1 border-gray-500 rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />

              <button className="cursor-pointer border-1 py-1 px-3 rounded-md bg-[#212830] border-[#ffffff53] text-[#2348b6] font-semibold text-[15px] hover:bg-[#2348b6] hover:text-white hover:border-[#2348b6]">
                Update
              </button>
            </footer>
          </div>
        </div>

        <div className="mt-8 border-t-1 border-[#ffffff27] flex justify-between items-center pt-1">
          <div>
            <header className="font-semibold text-white">
              Project description
            </header>
            <footer className="mt-2 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type here..."
                className="w-full px-3 py-1 border-1 border-gray-500 rounded-md outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />

              <button className="cursor-pointer border-1 py-1 px-3 rounded-md bg-[#212830] border-[#ffffff53] text-[#2348b6] font-semibold text-[15px] hover:bg-[#2348b6] hover:text-white hover:border-[#2348b6]">
                Update
              </button>
            </footer>
          </div>
        </div>
      </section>
      <section className="bg-[#ff000026] rounded-2xl p-8">
        <h1 className="text-[23px] font-semibold">Danger Zone</h1>

        <div className="mt-5 border-t-1 border-[#ffffff27] flex justify-between items-center pt-1">
          <div>
            <header className="font-semibold text-white">
              Delete this project
            </header>
            <footer>
              Once you delete a project, there is no going back. Please be
              certain.
            </footer>
          </div>
          <div>
            <button className="cursor-pointer border-1 py-1 px-3 rounded-md bg-[#212830] border-[#ffffff53] text-[#B62324] font-semibold text-[15px] hover:bg-[#B62324] hover:text-white hover:border-[#B62324]">
              Delete this project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSettings;
