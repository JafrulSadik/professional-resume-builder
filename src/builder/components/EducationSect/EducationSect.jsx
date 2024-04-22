import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Accordion from "../../../components/Accordion/Accordion";

const educationData = [
  {
    id: 1,
    name: "Dhaka College",
  },
  {
    id: 2,
    name: "Belkuchi College",
  },
  {
    id: 3,
    name: "Imperial College",
  },
  {
    id: 4,
    name: "SK Pailot High School",
  },
];

// const inputs = [
//   "School or College Name",
//   "Degree",
//   "Area",
//   "Grade",
//   "Start Date",
//   "End Date",
// ];

const EducationSect = () => {
  const [eduData, setEduData] = useState([
    {
      id: 1,
      name: "Dhaka College",
    },
    {
      id: 2,
      name: "Belkuchi College",
    },
    {
      id: 3,
      name: "Imperial College",
    },
    {
      id: 4,
      name: "SK Pailot High School",
    },
    {
      id: 5,
      name: "Milestone",
    },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && over.id !== active.id) {
      setEduData((eduData) => {
        const oldIndex = eduData.findIndex((item) => item.id === active.id);
        const newIndex = eduData.findIndex((item) => item.id === over.id);
        return arrayMove(eduData, oldIndex, newIndex);
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="w-full">
      <h1 className=" text-li-txt dark:text-dr-txt my-3 font-bold">
        Education Details
      </h1>

      <div className="flex flex-col gap-2">
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
          collisionDetection={closestCenter}
          sensors={sensors}
        >
          <SortableContext
            items={educationData}
            strategy={verticalListSortingStrategy}
          >
            {eduData.map((data) => (
              <Accordion key={data.id} item={data} />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      <div className="my-3 hover:bg-sky-100 dark:hover:bg-gray-900 rounded-md">
        <p className="p-1 font-normal text-sm text-sky-500 cursor-pointer">
          + Add Eductation
        </p>
      </div>
    </div>
  );
};

export default EducationSect;
