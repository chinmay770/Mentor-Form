import React from "react";
import NewSideBar from "../../helpers/MentorSidebar/NewSideBar";
import ProfileSection from "../Sections/ProfileSection";

const Academic = () => {
    return (
      <>
        <NewSideBar children={<ProfileSection />} />
      </>
    );
  };
  
  export default Academic;
  