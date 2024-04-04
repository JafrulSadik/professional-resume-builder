import EducationSect from "./components/EducationSect/EducationSect";
import ImageSect from "./components/ImageSect/ImageSect";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import ProfessionalDetails from "./components/ProfessionalDetails/ProfessionalDetails";
import ScoreSect from "./components/ScoreSect/ScoreSect";

const CreateSection = () => {
  return (
    <div className="flex flex-col items-center mx-8">
      <h1 className=" text-li-txt dark:text-dr-txt text-lg m-4 font-semibold">
        Info Of Yourself
      </h1>
      <div className="w-full sticky top-[-2px] bg-white dark:bg-dark-bg py-2">
        <ScoreSect />
      </div>
      <div className="w-full">
        <ImageSect />
      </div>
      <div className="w-full my-5">
        <PersonalDetails />
      </div>
      <div className="w-full my-5">
        <ProfessionalDetails />
      </div>
      <div className="w-full my-5">
        <EducationSect />
      </div>
    </div>
  );
};

export default CreateSection;
