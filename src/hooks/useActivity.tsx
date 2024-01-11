import React, { useContext, useEffect, useState } from "react";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { UserContext } from "../context/userContext";
import { Activity } from "../types/Activity";

export const useActivity = () => {
  const { userActivityGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [activityDatas, setActivityDatas] = useState<Activity>([
    { day: "", kilogram: 0, calories: 0 },
  ]);
  useEffect(() => {
    const getActivityDatas = async () => {
      const data = await userActivityGateway.load(id);
      setActivityDatas(data);
    };
    getActivityDatas();
  }, []);

  return { activityDatas };
};
