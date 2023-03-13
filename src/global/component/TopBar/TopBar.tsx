import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ReactElement } from "react";

export const TopBar = (): ReactElement => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          position: "fixed",
          "& .MuiDrawer-paper": {
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            paddingRight: "40px",
            marginLeft: "220px",
            boxSizing: "border-box",
            color: theme.palette.primary.main,
            height: "50px",
          },
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
          },
        }}
        variant="permanent"
        anchor="top"
      >
        <List>
          <ListItemButton
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItemText
              primary="User Name"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "14px",
                  textAlign: "right",
                },
              }}
            ></ListItemText>
            <ListItemText
              primary="Role Name"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "12px",
                  textAlign: "right",
                },
              }}
            ></ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
