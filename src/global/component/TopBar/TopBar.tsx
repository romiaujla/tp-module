import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";

export const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* You can also add a title if needed */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>

        {/* Notifications Icon with Tooltip */}
        <Tooltip title="Notifications">
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Tooltip>

        {/* History Icon with Tooltip */}
        <Tooltip title="History">
          <IconButton color="inherit">
            <HistoryIcon />
          </IconButton>
        </Tooltip>

        {/* Settings Icon with Tooltip */}
        <Tooltip title="Settings">
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
