import TemplateWrapper from "../TemplateWrapper/TemplateWrapper";

const TemplateLayout = () => {
  return (
    <div className=" w-full h-full overflow-y-auto  scrollbar-webkit-light dark:scrollbar-webkit-dark">
      <TemplateWrapper />
    </div>
  );
};

export default TemplateLayout;
