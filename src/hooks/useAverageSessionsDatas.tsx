import React, { useContext, useEffect, useState } from "react";

import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { UserContext } from "../context/userContext";
import { AverageSessions } from "../types/AverageSessions";

export const useAverageSessionsDatas = () => {
  const { userAverageSessionsGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [averageSessionsDatas, setAverageSessionsDatas] =
    useState<AverageSessions>([{ day: 0, sessionLength: 0 }]);
  useEffect(() => {
    const getUserAverageDatas = async () => {
      const data = await userAverageSessionsGateway.load(id);
      setAverageSessionsDatas(data);
    };
    getUserAverageDatas();
  }, []);

  return { averageSessionsDatas };
};
