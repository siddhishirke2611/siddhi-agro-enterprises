import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = ({ open }) => {

  const menu = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Users", icon: <PeopleIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 220 : 70,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 220 : 70,
          transition: "0.3s",
          overflowX: "hidden",
        },
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>

            {open && <ListItemText primary={item.name} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;