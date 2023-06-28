import React, { useState } from "react";
import arrowDown from "../assets/icons/arrowdown.svg";

const Collapse = ({ label, children, id }) => {

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className="collapse"
      id={id}
    >
      <h3
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {label}
        <img
          src={arrowDown}
          className={collapsed ? "arrowdown" : "arrowup"}
          alt="arrowdown arrowup"
        />
      </h3>
      
      {!collapsed && <div className="collapse-content">{children}</div>}

    </div>
  );
};

export default Collapse;
