import { Outlet } from "react-router-dom";
import { useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import Sidebar from "../components/Sidebar/SideBar";
import Settings from "../components/Settings/Settings";

const Layout = () => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      <TopBar onOpenSettings={() => setOpenSettings(true)} />
      <Sidebar />

      <Settings
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      />

      {/* 👇 Pages render here */}
      <Outlet />
    </>
  );
};

export default Layout;