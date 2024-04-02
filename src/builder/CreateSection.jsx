import React from "react";

const CreateSection = () => {
  return (
    <div className="flex flex-col items-center mx-6">
      <h1 className=" text-light-text dark:text-white text-lg m-4 font-semibold">
        Template Name
      </h1>
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-black dark:bg-gray-700 rounded-md text-white h-6 w-10">
            <p className="text-sm">30%</p>
          </div>
          <p className="text-sm dark:text-white">Resume Score</p>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1">
          <div className="w-[30%] bg-light-text dark:bg-white h-full rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateSection;
