import Accordion from "../../../components/Accordion/Accordion";

const ExpSect = () => {
  const inputs = [
    "Job Title",
    "Employment Type",
    "Start Date",
    "End Date",
    "Employment Type"
  ]

  return (
    <div className="w-full">
      <h1 className=" text-li-txt dark:text-dr-txt my-3 font-bold">
        Experience
      </h1>

      <Accordion inputs={inputs}/>

      {/*  flex justify-center border-[1px] w-32 border-sky-500 p-1 rounded-md */}
      <div className="my-3 hover:bg-sky-100 dark:hover:bg-gray-900 rounded-md">
        <p className="p-1 font-normal text-sm text-sky-500 cursor-pointer">
          + Add Eductation
        </p>
      </div>
    </div>
  );
};

export default ExpSect;
