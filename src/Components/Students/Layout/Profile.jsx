import React from "react";
import NewSideBar from "../../helpers/StudentSidebar/NewSideBar";
import ProfileSection from "../sections/ProfileSection";

const Profile = () => {
  return <NewSideBar children={<ProfileSection />} />;
};

export default Profile;
