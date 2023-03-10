import {
  BarChartRounded as BarChartRoundedIcon,
  CalendarMonthRounded as CalendarMonthRoundedIcon,
  HandshakeRounded as HandshakeRoundedIcon,
  MoveUpRounded as MoveUpRoundedIcon,
} from "@mui/icons-material";
import { ReactElement } from "react";
import { RouterPathEnum } from "../../../global/enum/router-path.enum";

export const generalNavbarListItems: Array<NavBarListItemsModel> = [
  {
    id: 0,
    label: "Dashboard",
    icon: <BarChartRoundedIcon />,
    route: RouterPathEnum.DASHBOARD_PATH,
  },
  {
    id: 1,
    label: "Calendar",
    icon: <CalendarMonthRoundedIcon />,
    route: RouterPathEnum.CALENDAR_PATH,
  },
  {
    id: 2,
    label: "Load Board",
    icon: <MoveUpRoundedIcon />,
    route: RouterPathEnum.LOAD_BOARD_PATH,
  },
  {
    id: 3,
    label: "Brokers",
    icon: <HandshakeRoundedIcon />,
    route: RouterPathEnum.BROKERS_PATH,
  },
];

export interface NavBarListItemsModel {
  id: number;
  label: string;
  icon: ReactElement;
  route: RouterPathEnum;
}
