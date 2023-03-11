import {
  AssignmentIndRounded as AssignmentIndRoundedIcon,
  BarChartRounded as BarChartRoundedIcon,
  CalendarMonthRounded as CalendarMonthRoundedIcon,
  CarRepairRounded as CarRepairRoundedIcon,
  HandshakeRounded as HandshakeRoundedIcon,
  LocalShippingRounded as LocalShippingRoundedIcon,
  LogoutRounded,
  MoveUpRounded as MoveUpRoundedIcon,
  PeopleRounded as PeopleRoundedIcon,
  RvHookupRounded as RvHookupRoundedIcon,
  WarehouseRounded as WarehouseRoundedIcon,
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

export const accountManagementListItems: Array<NavBarListItemsModel> = [
  {
    id: 4,
    label: "Company Profile",
    icon: <WarehouseRoundedIcon />,
    route: RouterPathEnum.COMPANY_PROFILE_PATH,
  },
  {
    id: 5,
    label: "Employees",
    icon: <PeopleRoundedIcon />,
    route: RouterPathEnum.EMPLOYEES_PATH,
  },
  {
    id: 6,
    label: "Equipment",
    icon: <CarRepairRoundedIcon />,
    subNav: [
      {
        id: 7,
        label: "Trucks",
        icon: <LocalShippingRoundedIcon />,
        route: RouterPathEnum.EQUIPMENT_TRUCKS_PATH,
      },
      {
        id: 8,
        label: "Trailers",
        icon: <RvHookupRoundedIcon />,
        route: RouterPathEnum.EQUIPMENT_TRAILERS_PATH,
      },
    ],
  },
];

export const profileManagementListItems: Array<NavBarListItemsModel> = [
  {
    id: 9,
    label: "Profile",
    icon: <AssignmentIndRoundedIcon />,
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

export const navbarList: Array<NavbarListModel> = [
  {
    subHeader: "General",
    listItems: generalNavbarListItems,
  },
  {
    subHeader: "Account Management",
    listItems: accountManagementListItems,
  },
  {
    subHeader: "Profile Management",
    listItems: profileManagementListItems,
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

export interface NavbarListModel {
  subHeader: string;
  listItems: Array<NavBarListItemsModel>;
}
