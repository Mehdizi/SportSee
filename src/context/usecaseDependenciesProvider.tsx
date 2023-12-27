import { PropsWithChildren, createContext } from "react";
import {
  StubUserAverageSessions,
  USER_AVERAGE_SESSIONS,
  UserAverageSessionsGateway,
} from "../gateways/stubAverageSessionsDatas";
import {
  StubUserHealthInfos,
  USER_MAIN_DATA,
  UserHealthGateway,
} from "../gateways/stubHealthInfosDatas";
// import { AxiosHealthInfosGateway } from "../gateways/axiosHealthInfos";

type Dependencies = {
  userAverageSessionsGateway: UserAverageSessionsGateway;
  userHealthGateway: UserHealthGateway;
};

const userAverageSessionsGateway = new StubUserAverageSessions();
userAverageSessionsGateway.feedWith(USER_AVERAGE_SESSIONS[0].sessions);

// const userHealthGateway = new AxiosHealthInfosGateway()

const userHealthGateway = new StubUserHealthInfos();
userHealthGateway.feedWith(USER_MAIN_DATA[0].keyData);

export const UsecaseDependencies = createContext<Dependencies>(null!);

export const UsecaseDependenciesProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <UsecaseDependencies.Provider
      value={{
        userAverageSessionsGateway,
        userHealthGateway,
      }}>
      {children}
    </UsecaseDependencies.Provider>
  );
};
