import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

const CompanyProfileComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "220px",
        }}
      >
        <Typography>CompanyProfile Component</Typography>
      </Box>
    </>
  );
};

export default CompanyProfileComponent;
