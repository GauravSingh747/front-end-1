import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/PNG-No Background.png";
import { MdQuestionAnswer } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import DropdownMenu from "./dropdown/DropdownMenu";
import DropdownMenu2 from "./dropdown/DropdownMenu2";
import SerachBar from "./searchBar/SerachBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavbarBgColor("bg-[#7a691d]"); // Set your desired background color tailwind class here
      } else {
        setNavbarBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <nav className="bg-transparent  sticky top-0 z-50 "> */}
      <nav className={`${navbarBgColor}  fixed w-full top-0 z-50`}>
        {/* ==== Before opening navigation bar */}
        {/* ======= logo number enquary section ====== */}
        <div>
          <div className="text-white flex justify-between items-center pt-1 pl-10 pb-1 pr-10  ">
            {/* ====== left ======= */}
            <div className="text-[1.3rem] flex items-center ">
              <div>
                <MdQuestionAnswer className="mr-3 mt-0.5 " />
              </div>
              <div>
                <h4>Quick inquiry</h4>
              </div>
            </div>
            {/* ======== middle ======== */}
            <div className="logo hidden sm:flex">
              <img src={logo} alt="company-logo" className="h-10 " />
            </div>
            {/* ======= right ======= */}
            <div className="text-[1.3rem] flex items-center  ">
              <div>
                <ImMobile className="mr-3 mt-0.5 cursor-pointer " />
              </div>
              <div>
                <a href="#">9310000053</a>
              </div>
            </div>
          </div>
        </div>
        {/* ======= logo number enquary section ====== */}
        <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center uppercase ">
              <div className="flex-shrink-0 flex sm:hidden ">
                <img src={logo} className="h-10 pl-6 " alt="" />
              </div>

              <div className="hidden lg:block">
                <div className=" lg:mx-60 ml-10 flex items-center  space-x-12">
                  {/* ____1____ */}
                  <div>
                    <Link
                      to="/"
                      className="text-gray-100  text-[1.05rem] hover:border-b-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                  </div>
                  {/* ____2____ */}
                  <div>
                    <a
                      href="#"
                      className="text-gray-100 text-[1.05rem]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <DropdownMenu />
                    </a>
                  </div>
                  {/* ____3____ */}
                  <div>
                    <a
                      href="#"
                      className="text-gray-100 text-[1.05rem] hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <DropdownMenu2 />
                    </a>
                  </div>
                  {/* ____4____ */}
                  <div>
                    <Link
                      to="/contact"
                      className="text-gray-100 text-[1.05rem] hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Carrer
                    </Link>
                  </div>
                  {/* ____5____ */}
                  <div>
                    <Link
                      to="/contact"
                      className="text-gray-100 text-[1.05rem] hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact-US
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================= */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  focus:ring-offset-2"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FaBars className="block h-6 w-6" />
                ) : (
                  <CgClose className="block h-6 w-6 text-gray-200 " />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* ==== Before opening navigation bar till above code */}

        {/* ==== after opening navigation bar below code */}
        {isOpen && (
          <div className="md:hidden bg-[#7a691d] " id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* <SerachBar /> */}
    </div>
  );
};

export default Navbar;
