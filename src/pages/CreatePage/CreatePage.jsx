import CreateSection from "../../builder/CreateSection";
import NavBar from "../../components/NavBar/NavBar";
import TemplateLayout from "../../templates/layout";

const CreatePage = () => {
  return (
    <div className="flex flex-col items-center dark:bg-dark-bg sm:h-full md:h-[100vh]">
      <NavBar />
      <div className="flex flex-1 overflow-hidden w-full">
        <div className="flex flex-col flex-1 overflow-y-auto  scrollbar-webkit-light dark:scrollbar-webkit-dark w-full">
          <CreateSection />
        </div>
        <div className="hidden md:hidden lg:flex flex-1 justify-center  items-center bg-gray-200 dark:bg-gray-900">
          <TemplateLayout />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
