import React from "react";
import NewSideBar from "../../helpers/StudentSidebar/NewSideBar";
import DashBoardSection from "../sections/DashBoardSection";

const DashBoard = () => {
  return (
    <>
      <NewSideBar children={<DashBoardSection />} />
    </>
  );
};

export default DashBoard;
