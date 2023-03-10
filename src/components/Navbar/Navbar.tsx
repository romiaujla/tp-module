import { ReactElement } from "react";
import { navbarList, NavBarListItemsModel } from "./constants/navbarItems";
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
import { RouterPathEnum } from "../../global/enum/router-path.enum";

export const Navbar = (): ReactElement => {
  const drawerWidth = 220;
  const navigate = useNavigate();
  const theme = useTheme();

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
      <Divider />
      {navbarList.map((list, listIndex) => {
        return (
          <>
            <List
              key={listIndex}
              subheader={<ListSubheader>{list.subHeader}</ListSubheader>}
            >
              {list.listItems.map((listItem, listItemIndex) => {
                return (
                  <>
                    <ListItem key={listItemIndex}>
                      {listItem.subNav == null ? (
                        <ListItemButton
                          onClick={() => handleNavigation(listItem)}
                        >
                          <ListItemIcon>{listItem.icon}</ListItemIcon>
                          <ListItemText>{listItem.label}</ListItemText>
                        </ListItemButton>
                      ) : (
                        <></>
                      )}
                    </ListItem>
                  </>
                );
              })}
            </List>
          </>
        );
      })}
      <Divider />
    </Drawer>
  );
};
