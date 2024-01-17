import React from "react";
import "./Header.scss";

export const HeaderNavBar = ({
  name,
  pathname,
}: {
  name: string;
  pathname: string;
}) => {
  return <li>{name}</li>;
};
