import React, { useContext, useEffect, useState } from "react";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { ScoreInfos } from "../types/ScoreInfos";
import { UserContext } from "../context/userContext";

export const useScore = () => {
  const { userMainDataGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [scoreDatas, setScoreDatas] = useState<ScoreInfos>({ todayScore: 0 });
  useEffect(() => {
    const getScoreDatas = async () => {
      const data = await userMainDataGateway.load(id);
      setScoreDatas({ todayScore: data.todayScore });
    };
    getScoreDatas();
  }, []);
  return { scoreDatas };
};
