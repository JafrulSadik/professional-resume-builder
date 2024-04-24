import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Accordion from "../../../components/Accordion/Accordion";
import { educationData } from "../../../utils/data";


const EducationSect = () => {
  const [eduData, setEduData] = useState(educationData);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && over.id !== active.id) {

      setEduData((eduData) => {
        const oldIndex = eduData.findIndex((item) => item.id === active.id);
        const newIndex = eduData.findIndex((item) => item.id === over.id);                                 

        return arrayMove(eduData,oldIndex, newIndex);
      });
    }

  
  };


  // console.log("EduData : " ,eduData)

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
          modifiers={[restrictToParentElement]}
          collisionDetection={closestCenter}
          sensors={sensors}
          // onDragMove={(event) => console.log(event)}
        >
          <SortableContext
            items={eduData}
            strategy={verticalListSortingStrategy}
          >
            {eduData.map((item) => (
              <Accordion key={item.id} id={item.id} item={item} />
            ))}
            {/* { eduData.map((item) => (
              <Item key={item.id} id={item.id} item={item} />
            ))} */}
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
