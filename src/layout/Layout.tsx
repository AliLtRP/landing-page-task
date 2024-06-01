import React from "react";
import NavBar from "./NavBar";
import "./layout.css";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="h-100">{children}</main>
    </div>
  );
};

export default Layout;
