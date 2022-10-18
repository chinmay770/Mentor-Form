import React from "react";
import NewSideBar from "../../helpers/MentorSidebar/NewSideBar";
import DashboardSection2 from "../Sections/DashboardSection";

const Academic = () => {
    return (
      <>
        <NewSideBar children={<DashboardSection2 />} />
      </>
    );
  };
  
  export default Academic;
  