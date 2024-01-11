import React from "react";
import {
  HealthInfosItem,
  HealthInfosItemProps,
} from "./healthInfosItem/HealthInfosItem";
import { useHealthInfosDatas } from "../../hooks/useHealthInfosDatas";
import { Energy } from "../../assets/Energy";
import { Protein } from "../../assets/Protein";
import { Carbohydrate } from "../../assets/Carbohydrate";
import { Lipid } from "../../assets/Lipid";
import "./HealthInfos.scss";

export const HealthInfos = () => {
  const { healthInfos } = useHealthInfosDatas();

  const healthItems: HealthInfosItemProps[] = [
    {
      name: "Calories",
      unit: "Kcal",
      quantity: healthInfos.macroCount.calorie,
      color: "red",
      Icon: <Energy />,
    },
    {
      name: "Protéine",
      unit: "g",
      quantity: healthInfos.macroCount.protein,
      color: "blue",
      Icon: <Protein />,
    },
    {
      name: "Glucides",
      unit: "g",
      quantity: healthInfos.macroCount.carbohydrate,
      color: "yellow",
      Icon: <Carbohydrate />,
    },
    {
      name: "Lipides",
      unit: "g",
      quantity: healthInfos.macroCount.lipid,
      color: "pink",
      Icon: <Lipid />,
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
