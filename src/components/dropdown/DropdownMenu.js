import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const toggleDropdown = () => {
    if (!isHovered) {
      setIsOpen(!isOpen);
    }
  };

  //==============================
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // setTimeout(() => {
    //   return setIsHovered(false);
    // }, 200);
  };

  //=================================
  const handleMenuMouseEnter = () => {
    setIsMenuHovered(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false);
    // setTimeout(() => {
    //   return setIsMenuHovered(false);
    // }, 200);
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 py-2 uppercase  text-white"
      >
        Projects
      </button>
      {(isOpen || isHovered || isMenuHovered) && (
        <div
          className="absolute  w-36 bg-[#6e7d86] rounded-lg shadow-xl"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <Link
            to="/residential"
            className="block px-4 py-2 text-gray-800 hover:rounded-lg hover:bg-gray-200"
          >
            Residential
          </Link>
          <Link
            to="/commercial"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            commercial
          </Link>
          <Link
            to="/sco"
            className="block px-4 py-2 text-gray-800 hover:rounded-lg hover:bg-gray-200"
          >
            SCO
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
