import React from "react";

import './App.css'
import ClockHeadinG from "./components/ClockHeadinG";
import ClockSlogan from "./components/ClockSlogan";
import CurrenTime from "./components/CurrenTime";
function App() {
  return (
    <div>
      <center>
      <ClockHeadinG/>
      <ClockSlogan/>
      <CurrenTime/>
      </center>
    </div>
  );
}
export default App;

