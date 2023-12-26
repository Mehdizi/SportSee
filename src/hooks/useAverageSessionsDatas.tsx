import React, { useEffect, useState } from "react";
import {
  StubUserAverageSessions,
  UserAverageSessions,
} from "../stubDatas/stubAverageSessionsDatas";

export const useAverageSessionsDatas = () => {
  const [averageDatas, setAverageDatas] = useState<UserAverageSessions>([
    { day: 0, sessionLength: 0 },
  ]);
  useEffect(() => {
    const getUserAverageDatas = async () => {
      setAverageDatas(await new StubUserAverageSessions().load(18));
    };
    getUserAverageDatas();
  }, []);
  return { averageDatas };
};
