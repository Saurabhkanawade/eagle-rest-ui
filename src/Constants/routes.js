import Login from "../Pages/Authentication/Login";
import Dashboard from "./../Pages/Dashboard/index";

const ROUTES = [
  {
    path: "/dashboard",
    key: "root",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/login",
    key: "login",
    exact: true,
    element: <Login />,
  },
];

export default ROUTES;
