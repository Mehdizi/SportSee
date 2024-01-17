import React from "react";
import { HealthInfos } from "./component/healthInfos/HealthInfos";
import { AverageSessions } from "./component/averageSessions/AverageSessions";
import { Presentation } from "./component/healthInfos/presentation/Presentation";
import { Activity } from "./component/activity/Activity";
import { Score } from "./component/score/Score";
import { Performances } from "./component/performances/Performances";
import { Header } from "./component/layout/header/Header";
import { LeftBanner } from "./component/layout/left-banner/LeftBanner";

function App() {
  return (
    <>
      <Header />
      <div className="left-banner-main-wrapper">
        <LeftBanner />
        <main className="main-content-wrapper">
          <Presentation />
          <Activity />
          <AverageSessions />
          <Performances />
          <Score />
          <HealthInfos />
        </main>
      </div>
    </>
  );
}

export default App;
