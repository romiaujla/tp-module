import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const ProfileComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
        }}
      >
        <Typography>Profile Component</Typography>
      </Box>
    </>
  );
};

export default ProfileComponent;
