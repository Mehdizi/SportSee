import { PropsWithChildren, createContext } from "react";
import { UserMainDataGateway } from "../gateways/UserMainData/UserMainDataGateway.types";
import {
  MOCKED_USER_ACTIVITY,
  MOCKED_USER_AVERAGE_SESSIONS,
  MOCKED_USER_MAIN_DATA,
} from "../mockedDatas/mockedDatas";
import { StubUserMainData } from "../gateways/UserMainData/StubUserMainData";
import { UserAverageSessionsGateway } from "../gateways/AverageSessions/UserAverageSessions.types";
// import { StubAverageSessions } from "../gateways/AverageSessions/StubAverageSessions";
import { AxiosUserAverageSessions } from "../gateways/AverageSessions/AxiosAverageSessions";
import { AxiosUserMainData } from "../gateways/UserMainData/AxiosUserMainData";
import { StubAverageSessions } from "../gateways/AverageSessions/StubAverageSessions";
import { UserActivityGateway } from "../gateways/Activity/UserActivity.types";
import { AxiosActivity } from "../gateways/Activity/AxiosActivity";
import { StubActivity } from "../gateways/Activity/StubActivity";

type Dependencies = {
  userMainDataGateway: UserMainDataGateway;
  userAverageSessionsGateway: UserAverageSessionsGateway;
  userActivityGateway: UserActivityGateway;
};

// const userMainDataGateway = new AxiosUserMainData();
const userMainDataGateway = new StubUserMainData(MOCKED_USER_MAIN_DATA[0]);

// const userAverageSessionsGateway = new AxiosUserAverageSessions();
const userAverageSessionsGateway = new StubAverageSessions(
  MOCKED_USER_AVERAGE_SESSIONS
);

// const userActivityGateway = new AxiosActivity()
const userActivityGateway = new StubActivity(MOCKED_USER_ACTIVITY);

const dependencies: Dependencies = {
  userMainDataGateway,
  userAverageSessionsGateway,
  userActivityGateway,
};

export const UsecaseDependencies = createContext<Dependencies>(dependencies);

export const UsecaseDependenciesProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <UsecaseDependencies.Provider value={dependencies}>
      {children}
    </UsecaseDependencies.Provider>
  );
};
