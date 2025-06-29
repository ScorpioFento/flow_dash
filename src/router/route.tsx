import Home from "../pages/home";
import Inbox from "../pages/inbox";

interface Route {
  path : string;
  element : React.ReactElement;
}

export const routes: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/inbox", element: <Inbox /> },
];
