import React, { useEffect, useState } from "react";
import {
  StubUserHealthInfos,
  USER_MAIN_DATA,
  UserHealthInfos,
} from "../stubDatas/stubHealthInfosDatas";

export const useHealthInfosDatas = () => {
  const [healthInfos, setHealthInfos] = useState<UserHealthInfos>({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  });

  useEffect(() => {
    const getUserHealthDatas = async () => {
      const userHealthInfosGateway = new StubUserHealthInfos();
      userHealthInfosGateway.feedWith(USER_MAIN_DATA[0].keyData);
      setHealthInfos(await userHealthInfosGateway.load(18));
    };

    getUserHealthDatas();
  }, []);

  return { healthInfos };
};
