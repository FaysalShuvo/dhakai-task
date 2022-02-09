// styles
import "./Sidebar.css";

import React from "react";
import {
  BagHandle,
  ExitOutline,
  Home,
  InformationCircleOutline,
  Search,
  SettingsOutline,
} from "react-ionicons";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between py-5">
      <div className="d-flex flex-column text-center">
        <Home color={"#008d6d"} height="20px" width="20px" />
        <Search className="py-1" color={"#909fa2"} height="20px" width="20px" />
        <BagHandle color={"#909fa2"} height="20px" width="20px" />
      </div>
      <div className="d-flex flex-column text-center">
        <SettingsOutline color={"#909fa2"} height="20px" width="20px" />
        <InformationCircleOutline
          className="py-1"
          color={"#909fa2"}
          height="20px"
          width="20px"
        />
        <ExitOutline color={"#909fa2"} height="20px" width="20px" />
      </div>
    </div>
  );
};

export default Sidebar;
