import React, { useContext, useEffect, useState } from "react";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { ScoreInfos } from "../types/ScoreInfos";
import { UserContext } from "../context/userContext";

export const useScore = () => {
  const { userMainDataGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    const getScoreDatas = async () => {
      const { todayScore } = await userMainDataGateway.load(id);
      setScore(todayScore);
    };
    getScoreDatas();
  }, []);
  return { score };
};
