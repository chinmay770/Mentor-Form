import { Routes, Route } from "react-router-dom";
import "./App.css";
import allRoutes from "./data/routes";

//Main Components Imports
import Main from "./Components/Home/Main";

//Login Components Import

//class-cc module imports
import ClassCCLogin from "./Components/ClassCC/Login";
import ClassCCRegister from "./Components/ClassCC/Signup";
import ClassCCDashboard from "./Components/ClassCC/Dashboard";

//mentor module imports
import MentorLogin from "./Components/Mentor/Login";
import MentorRegister from "./Components/Mentor/Signup";
import MentorDashboard from "./Components/Mentor/Dashboard";
import MentorCounseling from "./Components/Mentor/Layout/Counseling";
import MentorDashboard2 from "./Components/Mentor/Layout/Dashboard";
import MentorMessage from "./Components/Mentor/Layout/Message";
import MentorProfile from "./Components/Mentor/Layout/Profile";
import MentorStudent from "./Components/Mentor/Layout/Student";

//Student module imports
import StudentLogin from "./Components/Students/Login";
import StudentRegister from "./Components/Students/Signup";
import StudentDashboard from "./Components/Students/Layout/DashBoard";
import StudentAcademic from "./Components/Students/Layout/Academic";
import StudentAchievement from "./Components/Students/Layout/Achievement";
import StudentProfile from "./Components/Students/Layout/Profile";
import StudentSemester from "./Components/Students/Layout/Semester";
import StudentMessage from "./Components/Students/Layout/Message";
import StudentForgotPassword from "./Components/Students/ForgotPassword";
import StudentResetPassword from "./Components/Students/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Landing Main Pages */}
        <Route path="/" element={<Main />} />

        {/* Class-CC Pages */}
        <Route path={allRoutes.ccLogin} element={<ClassCCLogin />} />
        <Route path={allRoutes.ccRegister} element={<ClassCCRegister />} />
        <Route path={allRoutes.ccRegister} element={<ClassCCDashboard />} />

        {/* Mentor Pages */}
        <Route path={allRoutes.mentorLogin} element={<MentorLogin />} />
        <Route path={allRoutes.mentorRegister} element={<MentorRegister />} />
        <Route path={allRoutes.mentorDashboard} element={<MentorDashboard />} />

        {/* Student Pages */}
        <Route path={allRoutes.studentLogin} element={<StudentLogin />} />
        <Route path={allRoutes.studentRegister} element={<StudentRegister />} />
        <Route
          path={allRoutes.studentDashboard}
          element={<StudentDashboard />}
        />
        <Route
          path={allRoutes.studentDashboard}
          element={<StudentDashboard />}
        />
        <Route path={allRoutes.studentAcademic} element={<StudentAcademic />} />
        <Route
          path={allRoutes.studentAllSemesterDetails}
          element={<StudentSemester />}
        />
        <Route
          path={allRoutes.studentAchievements}
          element={<StudentAchievement />}
        />
        <Route path={allRoutes.studentProfile} element={<StudentProfile />} />
        <Route path={allRoutes.studentMessage} element={<StudentMessage />} />
        <Route
          path={allRoutes.studentForgotPassword}
          element={<StudentForgotPassword />}
        />
        <Route
          path={allRoutes.studentResetPassword}
          element={<StudentResetPassword />}
        />
      </Routes>
    </div>
  );
}

export default App;
