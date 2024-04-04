import Input from "../../../components/Input/Input";

const EducationSect = () => {
  return (
    <div className="w-full">
      <h1 className=" text-li-txt dark:text-dr-txt my-3 font-bold">
        Education Details
      </h1>

      <div className=" rounded-md">
        <div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <Input labelData="School or College Name"></Input>
            <Input labelData="Degree"></Input>
            <Input labelData="Area"></Input>
            <Input labelData="Grade"></Input>
            <Input labelData="Start Date"></Input>
            <Input labelData="End Date"></Input>
          </div>
        </div>
      </div>

      {/*  flex justify-center border-[1px] w-32 border-sky-500 p-1 rounded-md */}
      <div className="my-3 hover:bg-sky-100 dark:hover:bg-gray-900 rounded-md">
        <p className="p-1 font-normal text-sm text-sky-500 cursor-pointer">
          + Add Eductation
        </p>
      </div>
    </div>
  );
};

export default EducationSect;
