import React from "react";
import {
  HealthInfosItem,
  HealthInfosItemProps,
} from "../healthInfosItem/HealthInfosItem";
import { useHealthInfosDatas } from "../../hooks/useHealthInfosDatas";
import { Energy } from "../../assets/Energy";
import { Protein } from "../../assets/Protein";
import { Carbohydrate } from "../../assets/Carbohydrate";
import { Fat } from "../../assets/Fat";
import "./HealthInfos.scss";

export const HealthInfos = () => {
  const { healthInfos } = useHealthInfosDatas();

  const healthItems: HealthInfosItemProps[] = [
    {
      name: "Calories",
      unit: "Kcal",
      quantity: healthInfos.calorieCount,
      color: "red",
      Icon: <Energy />,
    },
    {
      name: "Protéine",
      unit: "g",
      quantity: healthInfos.proteinCount,
      color: "blue",
      Icon: <Protein />,
    },
    {
      name: "Glucides",
      unit: "g",
      quantity: healthInfos.carbohydrateCount,
      color: "yellow",
      Icon: <Carbohydrate />,
    },
    {
      name: "Lipides",
      unit: "g",
      quantity: healthInfos.lipidCount,
      color: "pink",
      Icon: <Fat />,
    },
  ];

  return (
    <ul className="health-infos-items-list">
      {healthItems.map((h, index) => (
        <li key={index}>
          <HealthInfosItem {...h} />
        </li>
      ))}
    </ul>
  );
};
