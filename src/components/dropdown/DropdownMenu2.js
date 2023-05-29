import { useEffect, useState } from "react";

const DropdownMenu2 = () => {
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
    <div>
      <button
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 py-2 uppercase  text-white"
      >
        Resources
      </button>
      {(isOpen || isHovered || isMenuHovered) && (
        <div
          className="absolute  w-32 bg-[#6e7d86]  rounded-lg shadow-xl"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <a
            href="#"
            className="block  px-4 py-2 text-white-800 hover:rounded-lg hover:underline"
          >
            Blog
          </a>
          <a
            href="#"
            className="block  px-4 py-2 text-white-800 hover:rounded-lg hover:underline"
          >
            Location
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu2;
