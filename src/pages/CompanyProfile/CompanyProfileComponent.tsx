import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { styleBreakPoints } from "../../components/Navbar/constants/styleBreakpoints";

const CompanyProfileComponent = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          marginLeft: styleBreakPoints.sidebarWidth,
          maxWidth: "400px",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(33, 43, 54)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          backgroundImage: "none",
          overflow: "hidden",
          position: "relative",
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          borderRadius: "16px",
          zIndex: "0",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <Typography
          sx={{
            marginBottom: "10px",
          }}
        >
          Company Information
        </Typography>
        <Grid container sx={{ display: "flex" }}>
          <Grid
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Company Name:</Typography>
            <Typography>Aujla Star Transport LLC</Typography>
          </Grid>
          <Grid container xs={12} sx={{ justifyContent: "space-between" }}>
            <Grid
              xs={4}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>MC:</Typography>
              <Typography>968302</Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>DOT:</Typography>
              <Typography>2885362</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyProfileComponent;
