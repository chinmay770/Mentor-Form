import React from "react";
import NewSideBar from "../../helpers/StudentSidebar/NewSideBar";
import AchievementSection from "../sections/AchievementSection";

const Achievement = () => {
  return <NewSideBar children={<AchievementSection />} />;
};

export default Achievement;
