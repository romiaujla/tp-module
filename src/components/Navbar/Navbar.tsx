import { ReactElement, useState } from "react";
import { navbarList, NavBarListItemsModel } from "./constants/navbarItems";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from "@mui/material";
import { RouterPathEnum } from "../../global/enum/router-path.enum";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { styleBreakPoints } from "./constants/styleBreakpoints";

export const Navbar = (): ReactElement => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // @ts-ignore
  const handleNavigation = (
    options: Pick<NavBarListItemsModel, "action" | "route">,
  ) => {
    const { route, action } = options;
    if (route != null) {
      return navigate(route);
    } else if (action?.logout) {
      console.log("Logout and then navigate");
      return navigate(RouterPathEnum.APP_PATH);
    }
  };

  const toggleSubmenu = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: styleBreakPoints.sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: styleBreakPoints.sidebarWidth,
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
      <Divider />
      {navbarList.map((list, listIndex) => {
        return (
          <>
            <List
              key={listIndex}
              subheader={<ListSubheader>{list.subHeader}</ListSubheader>}
            >
              {list.listItems.map((listItem, listItemIndex) => {
                if (listItem.subNav == null) {
                  return (
                    <>
                      <ListItemButton
                        key={listItemIndex}
                        onClick={() => handleNavigation(listItem)}
                      >
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <ListItemText primary={listItem.label}></ListItemText>
                      </ListItemButton>
                    </>
                  );
                } else {
                  return (
                    <>
                      <ListItemButton
                        key={listItemIndex}
                        onClick={() => toggleSubmenu()}
                      >
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <ListItemText primary={listItem.label}></ListItemText>
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div">
                          {listItem.subNav.map(
                            (subNavItem, subNavItemIndex) => {
                              return (
                                <>
                                  <ListItemButton
                                    key={subNavItemIndex}
                                    onClick={() => handleNavigation(subNavItem)}
                                    sx={{
                                      marginLeft: "30px",
                                    }}
                                  >
                                    <ListItemIcon>
                                      {subNavItem.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={subNavItem.label}
                                    ></ListItemText>
                                  </ListItemButton>
                                </>
                              );
                            },
                          )}
                        </List>
                      </Collapse>
                    </>
                  );
                }
              })}
            </List>
            {navbarList.length > listIndex + 1 && <Divider />}
          </>
        );
      })}
    </Drawer>
  );
};
