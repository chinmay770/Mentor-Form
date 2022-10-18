import React from "react";
import NewSideBar from "../../helpers/StudentSidebar/NewSideBar";
import MessageSection from "../sections/MessageSection";

const Message = () => {
  return <NewSideBar children={<MessageSection />} />;
};

export default Message;
