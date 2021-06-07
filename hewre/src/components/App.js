import React from "react";
import "../styles/main.scss";

export const App = ({ state }) => {
  return (
    <div className="dt-main">
      <div className="dt-main__container">
        <span className="dt-main__container__title">
          Example Component for: {state.username}
        </span>
        <div>"What are you going to build?"</div>
      </div>
    </div>
  );
};
