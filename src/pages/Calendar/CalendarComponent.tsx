import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const CalendarComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
        }}
      >
        <Typography>Calendar Component</Typography>
      </Box>
    </>
  );
};

export default CalendarComponent;
