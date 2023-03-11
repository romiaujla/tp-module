import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { styleBreakPoints } from "../../components/Navbar/constants/styleBreakpoints";

const LoadBoardComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: styleBreakPoints.sidebarWidth,
        }}
      >
        <Typography>LoadBoard</Typography>
      </Box>
    </>
  );
};

export default LoadBoardComponent;
