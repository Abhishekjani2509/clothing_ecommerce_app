import React from "react";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
