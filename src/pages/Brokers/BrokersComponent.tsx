import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const BrokersComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
          marginTop: "65px",
        }}
      >
        <Typography>Brokers Component</Typography>
      </Box>
    </>
  );
};

export default BrokersComponent;
