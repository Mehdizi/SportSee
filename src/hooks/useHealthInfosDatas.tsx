import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/userContext";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { MacroCount } from "../types/HealthInfos";

export const useHealthInfosDatas = () => {
  const { userMainDataGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [healthInfos, setHealthInfos] = useState<MacroCount>({
    macroCount: {
      calorie: 0,
      protein: 0,
      carbohydrate: 0,
      lipid: 0,
    },
  });

  useEffect(() => {
    const getUserHealthDatas = async () => {
      const data = await userMainDataGateway.load(id);
      setHealthInfos({
        macroCount: {
          calorie: data.macroCount.calorie,
          protein: data.macroCount.protein,
          carbohydrate: data.macroCount.carbohydrate,
          lipid: data.macroCount.lipid,
        },
      });
    };

    getUserHealthDatas();
  }, []);

  return { healthInfos };
};
