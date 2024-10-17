import { FC } from "react";
import ButtonArrow from "@/components/atom/ButtonArrow";
import Image from "next/image";
import ChevronDown from "../../../../public/icons/utils-icon/chevron-down.png";
import CloseButton from "../../../../public/icons/utils-icon/close-button.png";

const HiddenMenu: FC = () => {
  return (
    <>
      <div className="hidden-menu-container px-9 h-screen border-2 border-red-500 absolute top-0 left-0 right-0">
        <div className="close-button-container pt-6 pb-20 flex justify-end">
          <Image src={CloseButton} alt="close-button"/>
        </div>
        <div className="hidden-menu-navigation mb-16">
          <nav>
            <ul className="w-full flex flex-col gap-8 text-courtney-dark-blue">
              <li>
                <a href="/" className="text-3xl">
                  How to start
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a href="/" className="text-3xl">
                  Services
                </a>
                <Image src={ChevronDown} alt="chevron-down" />
              </li>
              <li className="flex items-center justify-between">
                <a href="/" className="text-3xl">
                  Technologies
                </a>
                <Image src={ChevronDown} alt="chevron-down" />
              </li>
              <li>
                <a href="/" className="text-3xl">
                  Carrers
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ButtonArrow title="Build a team" />
      </div>
    </>
  );
};

export default HiddenMenu;
