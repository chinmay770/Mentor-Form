import React from "react";
import NewSideBar from "../../helpers/StudentSidebar/NewSideBar";
import SemesterSection from "../sections/SemesterSection";

const Semester = () => {
  return <NewSideBar children={<SemesterSection />} />;
};

export default Semester;
