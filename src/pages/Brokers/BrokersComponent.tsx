import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { styleBreakPoints } from "../../components/Navbar/constants/styleBreakpoints";

const BrokersComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: styleBreakPoints.sidebarWidth,
        }}
      >
        <Typography>Brokers Component</Typography>
      </Box>
    </>
  );
};

export default BrokersComponent;
