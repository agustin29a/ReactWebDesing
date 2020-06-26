import React from "react";
import NavBar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import { css } from "emotion";

const App = () => {
  const tl = css`
    margin-top: 400px;
  `;
  return (
    <>
      <NavBar />
      <div className={tl}>
        <SectionOne />
      </div>
    </>
  );
};

export default App;
