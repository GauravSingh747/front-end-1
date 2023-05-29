import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
const SerachBar = () => {
  return (
    <div>
      <div className="max-w-3xl text-white items-center mx-auto  ">
        {/* ========== Main Heading ======= */}
        <div className=" text-center items-center  pt-[20rem] uppercase">
          <h1 className="text-2xl">EXPERIENCE LUXURY WITH</h1>
          <h1 className="md:text-[3.5rem] lg:text-[4.5rem] text-[2.5rem] font-Playfair">
            Turn<span className="text-[#e5c83d]">KEY</span> Reality
          </h1>
        </div>
        {/* ============ Select Button ============ */}
        <div className="flex justify-center items-center ">
          <div className="">
            <select
              name="city"
              id="city"
              className=" pl-4 bg-transparent p-1.5 border-2 rounded-md mr-[.2rem]  "
            >
              <option className="bg-[#6d5d6e] " value="gurugram">
                Gurugram
              </option>
              <option className="bg-[#6d5d6e] " value="delhi">
                Delhi
              </option>
              <option className="bg-[#6d5d6e]" value="noida">
                Noida
              </option>
            </select>
          </div>

          {/* ===== Search Input === */}
          <div className="relative flex items-center">
            <input
              type="search"
              placeholder="Serach cities..."
              className="lg:w-[600px] mg:w-[400] h-[40px] w-full sm:w-auto sm:flex p-4 border-2 bg-transparent rounded-md "
            />

            <button>
              <HiOutlineSearch className="text-[24px] absolute right-2 bottom-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerachBar;
