import { replace } from "lodash";
import Login from "../Pages/Authentication/Login";
import Dashboard from "../Pages/Dashboard/index";
import { Navigate } from "react-router-dom";
import Spinner from "../Pages/Component/Spinner";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ROUTES = [
  {
    path: "/",
    key: "root",
    exact: true,
    element: <Navigate replace to={"/login"} />,
  },
  {
    path: "/dashboard",
    key: "dashboard",
    exact: true,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    key: "login",
    exact: true,
    element: <Login />,
  },
  {
    path: "/spinner", // for testing
    key: "spinner",
    exact: true,
    element: <Spinner />,
  },
];

export default ROUTES;
