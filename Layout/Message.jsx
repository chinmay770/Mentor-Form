import React from "react";
import NewSideBar from "../../helpers/MentorSidebar/NewSideBar";
import MessageSection from "../Sections/MessageSection";

const Academic = () => {
    return (
      <>
        <NewSideBar children={<MessageSection />} />
      </>
    );
  };
  
  export default Academic;
  