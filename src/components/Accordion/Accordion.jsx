import React, { useState } from "react";
import Input from "../Input/Input";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" rounded-md border-2 border-gray-100 dark:bg-white px-4 py-4">
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full font-normal"
      >
        <span>Not Entered</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-li-txt-secondary dark:fill-li-txt shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-normal">
          <div className="my-2 rounded-md">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full ">
                <Input labelData="School or College Name"></Input>
                <Input labelData="Degree"></Input>
                <Input labelData="Area"></Input>
                <Input labelData="Grade"></Input>
                <Input labelData="Start Date"></Input>
                <Input labelData="End Date"></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
