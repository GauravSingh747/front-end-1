import React from "react";
import commercial from "../assets/commercial.mp4";
import Navbar from "../components/Navbar";
import Collections from "../components/Collections";
const Commercial = () => {
  return (
    <div>
      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={commercial} autoPlay loop muted />
        <div className="banner-content">
          <Navbar />
          {/* <Topbar /> */}
        </div>
      </div>
      <Collections />
    </div>
  );
};

export default Commercial;
