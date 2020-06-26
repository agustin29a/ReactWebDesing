import React from "react";
import { css } from "emotion";

const SectionFive = () => {
  const style = css`
    background-color: black;
    height: 15%;
    color: white;
    justify-content: center;
    display: flex;
  `;
  return (
    <div className={style}>
      <p>SECTION </p>
    </div>
  );
};

export default SectionFive;
