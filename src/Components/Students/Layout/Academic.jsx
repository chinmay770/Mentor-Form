import React from "react";
import NewSideBar from "../../helpers/StudentSidebar/NewSideBar";
import AcademicSection from "../sections/AcademicSection";

const Academic = () => {
  return (
    <>
      <NewSideBar children={<AcademicSection />} />
    </>
  );
};

export default Academic;
