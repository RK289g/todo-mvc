import React from "react";
import { Outlet } from "react-router-dom";
import "./LayoutWrapper.css";

const LayoutWrapper = () => {
  return (
    <div>
      <div>
        <nav className="header">
          <h1>ToDo App</h1>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWrapper;
