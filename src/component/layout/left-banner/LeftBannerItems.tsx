import React from "react";

export const LeftBannerItems = ({
  name,
  icon,
  pathname,
}: {
  name: string;
  icon: string;
  pathname: string;
}) => {
  return (
    <li className="lb-button-wrapper">
      <button>
        <img src={icon} alt="activity icon" />
      </button>
    </li>
  );
};
