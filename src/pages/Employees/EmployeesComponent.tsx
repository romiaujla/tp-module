import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { styleBreakPoints } from "../../components/Navbar/constants/styleBreakpoints";

const EmployeesComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: styleBreakPoints.sidebarWidth,
        }}
      >
        <Typography>Employees Component</Typography>
      </Box>
    </>
  );
};

export default EmployeesComponent;
