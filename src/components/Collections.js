import React from "react";
import logo from "../assets/PNG-No Background.png";
import m3m from "../assets/m3m-2.jpg";
const Collections = () => {
  return (
    <div>
      <div className="max-w-5xl my-10 px-4 mx-auto text-center  ">
        {/*======== Logo ======= */}
        <div className="flex justify-center ">
          <img src={logo} alt="logo-img" className="h-10 mb-4 " />
        </div>
        {/*======== Heading ======= */}
        <div>
          <h1 className="uppercase text-3xl py-4 ">
            the TURNKEY REALITY Collections
          </h1>
        </div>
        {/*======== Text ======= */}
        <div>
          <p>
            We deliver effortless luxury living at your doorstep with our
            exceptional contemporary properties one-of-a-kind.
          </p>
        </div>
        {/*======== Discover Links ======= */}
        <div className=" my-8 ">
          <a href="">DISCOVER PROPERTIES</a>
        </div>
      </div>
      {/* =============== property photos =============  */}

      <div className="my-10 px-[50px] flex justify-evenly items-center relative ">
        {/* ==== Left ==== */}
        <div className="w-full mr-4">
          <div className=" absolute px-4 top-[20rem]">
            <h1 className="text-[2.2rem] text-white ">M3M Gurgaon Projects</h1>
            <h2 className="text-[1.5rem] text-white ">Explore More</h2>
          </div>
          <div className="">
            <img src={m3m} alt="m3m-img" className="rounded-[8px] z-10" />
          </div>
        </div>

        {/* ==== Middle ==== */}
        <div className="w-full mr-4 ">
          <img src={m3m} alt="m3m-img" className="rounded-[8px] " />
        </div>

        {/* ==== Right ==== */}
        <div className="w-full ">
          <img src={m3m} alt="m3m-img" className="rounded-[8px] " />
        </div>
      </div>
    </div>
  );
};

export default Collections;
