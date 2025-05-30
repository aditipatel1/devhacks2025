import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import SignOut from "./pages/auth/sign-out";
import UserProfiles from "./pages/dashboard/userProfiles";
import WalkingBuddyMap from "@/pages/dashboard/WalkingBuddyMap";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Walking Buddy Map",
        path: "/walkingbuddymap",
        element: <WalkingBuddyMap />,
      },      
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "user profiles",
        path: "/user-profiles",
        element: <UserProfiles />,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [


     
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Sign Out",
        path: "/sign-out",
        element: <SignOut />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Sign In",
        path: "/sign-in",
        element: <SignIn />,
      }
    ],
  },
];

export default routes;
