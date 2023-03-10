import {
  BarChartRounded as BarChartRoundedIcon,
  CalendarMonthRounded as CalendarMonthRoundedIcon,
  EmojiTransportationRounded as EmojiTransportationRoundedIcon,
  HandshakeRounded as HandshakeRoundedIcon,
  LogoutRounded,
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

export const companyManagementListItems: Array<NavBarListItemsModel> = [
  {
    id: 4,
    label: "Company Profile",
    icon: <EmojiTransportationRoundedIcon />,
    route: RouterPathEnum.COMPANY_PROFILE_PATH,
  },
  {
    id: 5,
    label: "Employees",
    icon: <></>,
    route: RouterPathEnum.EMPLOYEES_PATH,
  },
  {
    id: 6,
    label: "Equipment",
    icon: <></>,
    subNav: [
      {
        id: 7,
        label: "Trucks",
        icon: <></>,
        route: RouterPathEnum.EQUIPMENT_TRUCKS_PATH,
      },
      {
        id: 8,
        label: "Trailers",
        icon: <></>,
        route: RouterPathEnum.EQUIPMENT_TRAILERS_PATH,
      },
    ],
  },
];

export const profileManagementListItems: Array<NavBarListItemsModel> = [
  {
    id: 9,
    label: "Profile",
    icon: <></>,
    route: RouterPathEnum.PROFILE_PATH,
  },
  {
    id: 10,
    label: "Logout",
    icon: <LogoutRounded />,
    route: RouterPathEnum.APP_PATH,
    action: {
      logout: true,
    },
  },
];

export interface NavBarListItemsModel {
  id: number;
  label: string;
  icon: ReactElement;
  route?: RouterPathEnum;
  subNav?: Array<NavBarListItemsModel>;
  action?: {
    logout: boolean;
  };
}
