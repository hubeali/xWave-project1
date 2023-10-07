import React from "react";
import RootLayout from "../root-layout/root-layout";
import Healthcare from "../Healthcare/healthcare";
import Sectionone from "../Home-section-1/home-section-1";

const Home = () => {
  return (
    <div>
      <RootLayout />
      <Healthcare />
      <Sectionone/>
    </div>
  );
};

export default Home;