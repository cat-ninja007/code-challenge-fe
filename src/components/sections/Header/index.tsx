import { FC } from "react";
import Image from "next/image";
import HiddenMenu from "./HiddenMenu";

import CourtneyLogo from '../../../public/images/courtney-logo.png'
import BurgerMenu from '../../../public/icons/utils-icon/burger-menu.png'

const Header:FC = () => {
  return (
    <>
      <header>
        <div className="header-section px-4 h-20 flex justify-between items-center border-2 border-courtney-dark-blue">
          <div className="header-image-container w-36">
            <Image src={CourtneyLogo} alt="courtney-logo" />
          </div>

          <div className="header-burger-menu">
            <Image src={BurgerMenu} alt="burger-menu" />
          </div>
        </div>
        <HiddenMenu />
      </header>
    </>
  )
}

export default Header;