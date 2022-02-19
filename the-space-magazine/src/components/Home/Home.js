import React from "react";
import "./Home.css";
import EditorSection from "../EditorSection/EditorSection";
import TodaysImageSection from "../TodaysImageSection/TodaysImageSection";
import TrendingSection from "../TrendingSection/TrendingSection";

const Home = () => {
  return (
    <div>
      <EditorSection /> 
      <TodaysImageSection />     
      <TrendingSection />
    </div>
  );
};

export default Home;
