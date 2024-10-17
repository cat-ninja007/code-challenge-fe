'use client'
import { FC, useState } from "react";
import Image from "next/image";
import HiddenMenu from "./HiddenMenu";

import CourtneyLogo from '../../../public/images/courtney-logo.png'
import BurgerMenu from '../../../public/icons/utils-icon/burger-menu.png'

const Header:FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <>
      <header>
        <div className="header-section px-4 h-20 flex justify-between items-center">
          <div className="header-image-container w-36">
            <Image src={CourtneyLogo} alt="courtney-logo" />
          </div>

          <div className="header-burger-menu cursor-pointer" onClick={toggleMenu}>
            <Image src={BurgerMenu} alt="burger-menu" />
          </div>
        </div>
        {
          isMenuVisible && (
            <HiddenMenu onClose={toggleMenu} />
          )
        }
      </header>
    </>
  )
}

export default Header;