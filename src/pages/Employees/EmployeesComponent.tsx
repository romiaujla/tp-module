import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const EmployeesComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
        }}
      >
        <Typography>Employees Component</Typography>
      </Box>
    </>
  );
};

export default EmployeesComponent;
