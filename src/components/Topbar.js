import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
const Topbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavbarBgColor("bg-gray-800"); // Set your desired background color tailwind class here
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
    <nav className={`fixed w-full ${navbarBgColor} text-black py-2 z-10`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img className="h-12 mr-2" src={logo} alt="Logo" />{" "}
          {/* Replace with your logo image */}
          <span className="text-white font-semibold text-lg">My App</span>{" "}
          {/* Replace with your app name */}
        </div>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
