import React from "react";

import "./ChartBar.css";

const Chart = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
        <div className="chart-bar__label"></div>
      </div>
    </div>
  );
};

export default ChartBar;
