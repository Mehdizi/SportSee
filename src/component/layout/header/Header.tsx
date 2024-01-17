import React from "react";
import logo from "../../../assets/logos/SportSee-logo.png";
import { HeaderNavBar } from "./HeaderNavBar";
import "./Header.scss";

export const Header = () => {
  const navBar = [
    {
      name: " Acceuil",
      pathname: "./",
    },
    {
      name: "Profil",
      pathname: "./",
    },
    {
      name: "Réglage",
      pathname: "./",
    },
    {
      name: "Communauté",
      pathname: "./",
    },
  ];
  return (
    <header className="header">
      <img src={logo} alt="logo SportSee" className="header-logo" />
      <nav className="header-navbar">
        <ul>
          {navBar.map((nav, index) => {
            return <HeaderNavBar key={index} name={nav.name} pathname="" />;
          })}
        </ul>
      </nav>
    </header>
  );
};
