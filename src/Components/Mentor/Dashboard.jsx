import React from "react";
import NewSideBar from "D:/Final year project/menty-frontend-master/src/Components/helpers/MentorSidebar/NewSideBar.jsx";
import DashBoardSection from "D:/Final year project/menty-frontend-master/src/Components/Mentor/Dashboard.jsx";

const DashBoard = () => {
  return (
    <>
      <NewSideBar children={<DashBoardSection />} />
    </>
  );
};

export default DashBoard;
