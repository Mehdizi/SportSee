import React from "react";
import "./HealthInfosItem.scss";

export type HealthInfosItemProps = {
  name: string;
  unit: string;
  quantity: number | string;
  color: string;
  Icon: JSX.Element;
};

// let nombreFormate = nombreAPI.toLocaleString("en-US");

export const HealthInfosItem = ({
  name,
  unit,
  quantity,
  color,
  Icon,
}: HealthInfosItemProps) => {
  const backgroundColor =
    color === "blue"
      ? "blue"
      : color === "red"
      ? "red"
      : color === "pink"
      ? "pink"
      : color === "yellow"
      ? "yellow"
      : "";

  return (
    <div className="health-infos-wrapper">
      <div className={`health-infos-svg-wrapper ${backgroundColor}`}>
        <div className="health-infos-icon">{Icon}</div>
      </div>
      <div className="health-infos-title-wrapper">
        <p>
          {quantity}
          {unit}
        </p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
