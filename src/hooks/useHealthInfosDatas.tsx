import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/userContext";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { UserHealthInfos } from "../gateways/stubHealthInfosDatas";

export const useHealthInfosDatas = () => {
  const { userHealthGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [healthInfos, setHealthInfos] = useState<UserHealthInfos>({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  });

  useEffect(() => {
    const getUserHealthDatas = async () => {
      const data = await userHealthGateway.load(id);
      console.log(data);
      setHealthInfos(data);
    };

    getUserHealthDatas();
  }, []);

  return { healthInfos };
};
