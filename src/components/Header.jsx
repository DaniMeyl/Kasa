import React from "react";
import "../style/layout/_header.scss";
import { NavLink } from "react-router-dom";
import logoHeader from "../assets/icons/logo-header.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-header">
        <img
          src={logoHeader}
          alt="logo kasa orange"
        />
      </div>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "link active" : "link";
            }}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "link active" : "link";
            }}
          >
            A Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
