import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const DashboardComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
        }}
      >
        <Typography>Dashboard</Typography>
      </Box>
    </>
  );
};

export default DashboardComponent;
