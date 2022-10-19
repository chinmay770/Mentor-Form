import React from "react";
import NewSideBar from "../../helpers/MentorSidebar/NewSideBar";
import CounselingSection from "../Sections/CounselingSection";

const Academic = () => {
    return (
      <>
        <NewSideBar children={<CounselingSection />} />
      </>
    );
  };
  
  export default Academic;
  