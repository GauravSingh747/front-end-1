import React from "react";
import residential from "../assets/residential.mp4";
import Navbar from "../components/Navbar";
import Collections from "../components/Collections";
const Residential = () => {
  return (
    <div>
      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={residential} autoPlay loop muted />
        <div className="banner-content">
          <Navbar />
          {/* <Topbar /> */}
        </div>
      </div>
      <Collections />
    </div>
  );
};

export default Residential;
