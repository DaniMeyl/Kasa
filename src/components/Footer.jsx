import React from "react";
import logoFooter from "../assets/icons/logo-footer.svg";
import "../style/layout/_footer.scss";

const Footer = () => {
  return (
    <footer>
      <img
        src={logoFooter}
        alt="logo kasa blanc"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
