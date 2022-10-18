import React from "react";
import NewSideBar from "../../helpers/MentorSidebar/NewSideBar";
import StudentSection from "../Sections/StudentSection";

const Academic = () => {
    return (
      <>
        <NewSideBar children={<StudentSection />} />
      </>
    );
  };
  
  export default Academic;
  