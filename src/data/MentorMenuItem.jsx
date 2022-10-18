import allRoutes from "./routes";
import ProfileLogo from "../images/Student/Profile.svg";
import AcademicLogo from "../images/Student/Academic.svg";
import AchievementLogo from "../images/Student/Achievement.svg";
import MessageLogo from "../images/Student/Message.svg";
import SemesterLogo from "../images/Student/Semester.svg";
import DashboardLogo from "../images/Student/Dashboard.svg";

const StudentMenuItem = [
  {
    path: allRoutes.mentorDashboard,
    name: "Dashboard",
    icon: DashboardLogo,
  },
  {
    path: allRoutes.mentorStudentSection,
    name: "Students",
    icon: AcademicLogo,
  },
  {
    path: allRoutes.mentorCounselling,
    name: "Counseling",
    icon: SemesterLogo,
  },
  {
    path: allRoutes.mentorMessage,
    name: "Message",
    icon: AchievementLogo,
  },
  {
    path: allRoutes.studentMessage,
    name: "Messages",
    icon: MessageLogo,
  },
  {
    path: allRoutes.mentorProfile,
    name: "Profile",
    icon: ProfileLogo,
  },
];

export default StudentMenuItem;
