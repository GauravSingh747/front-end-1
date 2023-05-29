import React from "react";
import "./banner.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import bgvideo from "../assets/video-2.mp4";
import Collections from "./Collections";
import SerachBar from "./searchBar/SerachBar";
const Banner = () => {
  return (
    <div>
      {/* ======= Banner context */}

      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={bgvideo} autoPlay loop muted />
        <div className="banner-content">
          <Navbar />
          <SerachBar />
          {/* <Topbar /> */}
        </div>
      </div>

      {/* ======= Collection Content ==== */}
      <Collections />
    </div>
  );
};

export default Banner;
