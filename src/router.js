import { Routes, Route } from "react-router-dom";

function Router({ routes }) {
  return (
    <Routes>
      {routes.map((route, i) => {
        return <Route {...route} />;
      })}
    </Routes>
  );
}

export default Router
