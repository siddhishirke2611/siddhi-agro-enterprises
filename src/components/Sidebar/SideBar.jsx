import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Dashboard,
  People,
  Settings,
} from "@mui/icons-material";
import './SideBar.css'

const drawerWidth = 240;
const collapsedWidth = 70;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Profile", icon: <People /> },
    { text: "Settings", icon: <Settings /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          transition: "0.3s",
          overflowX: "hidden",
        },
      }}
      className="sidebar"
    >
      {/* Top toggle button */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: collapsed ? "center" : "flex-end",
        }}
      >
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>

            {!collapsed && (
              <ListItemText primary={item.text} />
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;