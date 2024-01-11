import React from "react";
import { HealthInfos } from "./component/healthInfos/HealthInfos";
import { AverageSessions } from "./component/averageSessions/AverageSessions";
import { Presentation } from "./component/healthInfos/presentation/Presentation";
import { Activity } from "./component/activity/Activity";
import { Score } from "./component/score/Score";

function App() {
  return (
    <main className="main-content-wrapper">
      <Presentation />
      <Activity />
      <AverageSessions />
      <div>Radar Map</div>
      <Score />
      <HealthInfos />
    </main>
  );
}

export default App;
