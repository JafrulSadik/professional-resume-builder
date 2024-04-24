import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Accordion from "../../../components/Accordion/Accordion";
import { useState } from "react";
import { educationData } from "../../../utils/data";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TemplateWrapper from "./../../../templates/TemplateWrapper/TemplateWrapper"

const ExpSect = () => {
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
        Experiance
      </h1>

      <div className="flex flex-col gap-2">
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToParentElement]}
          collisionDetection={closestCenter}
          sensors={sensors}
        >
          <SortableContext
            items={eduData}
            strategy={verticalListSortingStrategy}
          >
            {eduData.map((item) => (
              <Accordion key={item.id} id={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      <div className="my-3 hover:bg-sky-100 dark:hover:bg-gray-900 rounded-md">
        <p className="p-1 font-normal text-sm text-sky-500 cursor-pointer">
          + Add Eductation
        </p>
      </div>

      <button className="bg-white px-2 py-2 rounded-md text-sm ">
        <PDFDownloadLink document={<TemplateWrapper />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </button>
    </div>
  );
};

export default ExpSect;
