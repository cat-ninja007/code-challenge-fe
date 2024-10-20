"use client";
import { FC, useState } from "react";
import Image from "next/image";
import HiddenMenu from "./HiddenMenu";

import CourtneyLogo from "../../../public/images/courtney-logo.png";
import BurgerMenu from "../../../public/icons/utils-icon/burger-menu.png";
import RightArrowNavy from "../../../public/icons/utils-icon/right-arrow-navy.png";
import RightArrow from "../../../public/icons/utils-icon/right-arrow.png";

const Header: FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };
  return (
    <>
      <header className="fixed z-10 w-full top-0 bg-courtney-white lg:px-10">
        <div className="header-section px-4 h-20 flex justify-between items-center">

          {/* Logo */}
          <div className="header-image-container w-36">
            <Image src={CourtneyLogo} alt="courtney-logo" />
          </div>

          {/* Navigasi */}
          <nav className="hidden lg:flex justify-center mx-4">
            <ul className="flex justify-center space-x-8 text-courtney-dark-blue">
              <li>
                <a href="/" className="text-xl lg:text-lg">
                  How to start
                </a>
              </li>
              <li>
                <a href="/about" className="text-xl lg:text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="/service" className="text-xl lg:text-lg">
                  Service
                </a>
              </li>
              <li>
                <a href="/team" className="text-xl lg:text-lg">
                  Team
                </a>
              </li>
            </ul>
          </nav>

          {/* Additional Menu on Desktop*/}
          <div className="hidden lg:flex header-right-container items-center gap-6">
            <div className="header-cta-butto">
              <button
                className={`
                flex 
                items-center 
                gap-1 
                cursor-pointer 
                px-4 
                py-2
                lg:text-md

                ${
                  isActive
                    ? "bg-courtney-dark-blue text-courtney-white border-0"
                    : "bg-transparent text-courtney-dark-blue border-2 border-courtney-dark-blue"
                } 
                rounded-lg 
                font-bold`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
              >
                BUILD A TEAM{" "}
                <Image
                  src={isActive ? RightArrow : RightArrowNavy}
                  alt="right-arrow"
                />
              </button>
            </div>
            <nav>
              <ul className="text-courtney-dark-blue">
                <li>
                  <a href="/" className="lg:text-lg">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Burger Menu */}
          <div
            className="header-burger-menu lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <Image src={BurgerMenu} alt="burger-menu" />
          </div>
        </div>
        {isMenuVisible && <HiddenMenu onClose={toggleMenu} />}
      </header>
    </>
  );
};

export default Header;
