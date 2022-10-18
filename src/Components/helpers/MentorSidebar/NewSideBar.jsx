import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import allRoutes from "../../../data/routes";

const NewSideBar = ({ children }) => {
  return (
    <>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#9f1c33">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href={allRoutes.studentDashboard}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              RAIT
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                exact
                to={allRoutes.studentDashboard}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={allRoutes.studentAcademic}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="student">
                  Profile section
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={allRoutes.studentAllSemesterDetails}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="chart-line">
                  Student Section
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={allRoutes.studentAchievements}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="envelope">
                  Message Section
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={allRoutes.studentMessage}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="heart">
                  Counselling Section
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to={allRoutes.studentProfile}
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>

        <div>{children}</div>
      </div>
    </>
  );
};

export default NewSideBar;
