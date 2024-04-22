import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDragIndicator } from "react-icons/md";

const Accordion = (props) => {
  const { item } = props;
  const { id, name } = item;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const [accordionOpen, setAccordionOpen] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className=" rounded-md border-2 border-gray-100 dark:bg-white"
      ref={setNodeRef}
      style={style}
    >
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full h-full font-normal"
      >
        <div className="flex gap-2 items-center">
          <div className=" p-2 text-li-txt" {...attributes} {...listeners}>
            <MdDragIndicator size={20} />
          </div>

          <div className="py-4">
            <p>{name}</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-xl p-4">
          {accordionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-normal">
          {/* Accordion data */}
          <div className="h-40 w-full bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
