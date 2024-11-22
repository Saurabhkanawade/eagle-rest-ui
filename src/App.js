import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./Constants/routes";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Router routes={ROUTES} />
    </BrowserRouter>
  );
}

export default App;
