import React, { useContext } from "react";
import { DataContext } from "../../Provider/Context";
import { profile } from "../../utils/dummy";
import TemplateOne from "../TemplateOne/TemplateOne";

// Create styles

// Create Document Component
const TemplateWrapper = () => {
  // const {title} = props;
  const { data, setData } = useContext(DataContext);

  return (
    <div className="h-auto flex flex-col scale-[0.6]">
      <TemplateOne userData={profile} isLive={true} />
    </div>
  );
};

export default TemplateWrapper;
