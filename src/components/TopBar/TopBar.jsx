import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { MdSettings } from "react-icons/md";
import Settings from "../Settings/Settings";
import Select from "react-select";
import './TopBar.css'
import Notification from "../Notification/Notification";
import Profile from "../Profile/Profile";


const TopBar = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const toggleSettings = () => {
    setOpenSettings((prev) => !prev);
  };

  return (
    <div className="topbar">
      <div className="left-content">
        <Select placeholder="Search here..." />
      </div>

      <div className="right-content">
        <Notification />
        <Profile />
        <MdSettings className="setting-icon" onClick={toggleSettings}/>
        {/* <Button className="setting" onClick={toggleSettings}>
          <MdSettings className="setting-icon" />
        </Button> */}
      </div>

      <Settings
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      />
    </div>
  );
};

export default TopBar;