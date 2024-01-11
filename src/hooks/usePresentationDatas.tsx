import React, { useContext, useEffect, useState } from "react";
import { UsecaseDependencies } from "../context/usecaseDependenciesProvider";
import { UserContext } from "../context/userContext";
import { UserInfos } from "../types/UserInfos";

export const usePresentationDatas = () => {
  const { userMainDataGateway } = useContext(UsecaseDependencies);
  const { id } = useContext(UserContext);
  const [presentationInfos, setPresentationInfos] = useState<UserInfos>({
    firstName: "",
    lastName: "",
    age: 0,
  });

  useEffect(() => {
    const getUserPresentationDatas = async () => {
      const data = await userMainDataGateway.load(id);
      setPresentationInfos({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
      });
    };

    getUserPresentationDatas();
  }, []);
  return { presentationInfos };
};
