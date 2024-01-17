import React, { useContext, useEffect, useState } from "react";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { UserContext } from "../context/userContext";
import { Performances } from "../types/Performances";

export const usePerformances = () => {
  const { userPerformancesGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [performancesDatas, setPerformancesDatas] = useState<Performances>({
    kind: {
      0: "",
    },
    data: [
      {
        value: 0,
        kind: 0,
      },
    ],
  });
  useEffect(() => {
    const getPerformancesDatas = async () => {
      const data = await userPerformancesGateway.load(id);
      setPerformancesDatas(data);
    };
    getPerformancesDatas();
  }, []);
  return { performancesDatas };
};
