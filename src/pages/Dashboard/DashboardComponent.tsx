import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { styleBreakPoints } from "../../components/Navbar/constants/styleBreakpoints";

const DashboardComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: styleBreakPoints.sidebarWidth,
        }}
      >
        <Typography>Dashboard</Typography>
      </Box>
    </>
  );
};

export default DashboardComponent;
