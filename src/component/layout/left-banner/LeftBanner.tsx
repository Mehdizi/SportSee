import React from "react";
import "./LeftBanner.scss";
import meditation from "../../../assets/left-banner-img/meditation.png";
import swimming from "../../../assets/left-banner-img/swimming.png";
import biking from "../../../assets/left-banner-img/biking.png";
import bodybuilding from "../../../assets/left-banner-img/bodybuilding.png";
import { LeftBannerItems } from "./LeftBannerItems";

export const LeftBanner = () => {
  const activityButton = [
    {
      name: "Méditation",
      icon: meditation,
      pathname: "./",
    },
    {
      name: "Natation",
      icon: swimming,
      pathname: "./",
    },
    {
      name: "Cyclisme",
      icon: biking,
      pathname: "./",
    },
    {
      name: "Musculation",
      icon: bodybuilding,
      pathname: "./",
    },
  ];

  return (
    <div className="left-banner-wrapper">
      <nav className="nav-activity">
        <ul className="lb-activity-wrapper">
          {activityButton.map((activity, index) => {
            return (
              <LeftBannerItems
                key={index}
                name={activity.name}
                icon={activity.icon}
                pathname=""
              />
            );
          })}
        </ul>
      </nav>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
};
