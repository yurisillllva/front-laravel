import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./pages/Logon";

export default function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Logon} />
      </Routes>
    </BrowserRouter>
  );
}
