import React from "react";
import { Header } from "./component/layout/header/Header";
import { LeftBanner } from "./component/layout/left-banner/LeftBanner";
import { Presentation } from "./component/presentation/Presentation";
import { Activity } from "./component/activity/Activity";
import { AverageSessions } from "./component/averageSessions/AverageSessions";
import { Performances } from "./component/performances/Performances";
import { Score } from "./component/score/Score";
import { HealthInfos } from "./component/healthInfos/HealthInfos";

function App() {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}

export default App;
