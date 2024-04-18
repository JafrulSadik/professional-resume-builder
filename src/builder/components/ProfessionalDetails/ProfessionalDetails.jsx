import TextEditor from "../../../components/TextEditor/TextEditor";

const ProfessionalDetails = () => {
  return (
    <div className="w-full">
      <h1 className=" text-li-txt dark:text-dr-txt my-3 font-bold">
        Personal Details
      </h1>
      <div className="">
        <TextEditor />
      </div>
    </div>
  );
};

export default ProfessionalDetails;
