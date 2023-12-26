import React from "react";
import { HealthInfos } from "./component/healthInfos/HealthInfos";

function App() {
  return (
    <main className="main-content-wrapper">
      <div>Salutation</div>
      <div>Activité quotidienne</div>
      <div>Durées moyennes des sessions</div>
      <div>Radar Map</div>
      <div>Score</div>
      <HealthInfos />
    </main>
  );
}

export default App;
