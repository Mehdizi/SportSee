import React, { useContext, useEffect, useState } from "react";

import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { UserContext } from "../context/userContext";
import { UserAverageSessions } from "../gateways/stubAverageSessionsDatas";

export const useAverageSessionsDatas = () => {
  const { userAverageSessionsGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [averageDatas, setAverageDatas] = useState<UserAverageSessions>([
    { day: 0, sessionLength: 0 },
  ]);
  useEffect(() => {
    const getUserAverageDatas = async () => {
      const data = await userAverageSessionsGateway.load(id);
      console.log(data);
      setAverageDatas(data);
    };
    getUserAverageDatas();
  }, []);
  return { averageDatas };
};
