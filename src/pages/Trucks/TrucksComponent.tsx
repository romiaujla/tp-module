import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const TrucksComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
        }}
      >
        <Typography>Trucks Component</Typography>
      </Box>
    </>
  );
};

export default TrucksComponent;
