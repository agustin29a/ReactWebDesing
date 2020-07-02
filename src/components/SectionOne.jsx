import React from "react";
import { css } from "emotion";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";

const SectionOne = () => {
  const c1Styled = css`
    height: 400px;
    width: 100vw;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    display: flex;
    @media (max-width: 768px) {
      display: block;
      position: relative;
      height: 1000px;
    }
  `;

  const imgStyle = css`
    height: 85%;
    display: flex;
    @media (max-width: 768px) {
      display: block;
      height: 32%;
    }
  `;

  const imgStyle2 = css`
    height: 100%;
    width: 70%;
    background-color: #e9e3e3;

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const imgStyle3 = css`
    height: 100%;
    width: 30%;
    background-color: #efeded;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;

    @media (max-width: 768px) {
      width: 100%;
      display: block;
      height: 30%;
      display: flex;
    }
  `;

  const imgStyle4 = css`
    flex: 1;
    position: relative;
    height: 100%;
    align-items: center;
    text-align: center;
  `;

  return (
    <div className={c1Styled}>
      <div className={imgStyle2}>
        <SectionFive />
        <div className={imgStyle}>
          <div className={imgStyle4}>
            <SectionThree />
          </div>
          <div className={imgStyle4}>
            <SectionFour />
          </div>
          <div className={imgStyle4}>
            <SectionSix />
          </div>
        </div>
      </div>
      <div className={imgStyle3}>
        <SectionTwo />
      </div>
    </div>
  );
};

export default SectionOne;
