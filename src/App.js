import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./Constants/routes";
import Router from "./router";
import Spinner from "./Pages/Component/Spinner";

function App() {
    
    return (
        <BrowserRouter>
            <Router routes={ROUTES} />
        </BrowserRouter>
    );
}

export default App;
