import { ReactElement } from "react";
import { generalNavbarListItems } from "./constants/navbarItems";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from "@mui/material";

export const Navbar = (): ReactElement => {
  const drawerWidth = 220;
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: theme.palette.primary.main,
        },
        "& .MuiSvgIcon-root": {
          color: theme.palette.primary.main,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List subheader={<ListSubheader>General</ListSubheader>}>
        {generalNavbarListItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};
