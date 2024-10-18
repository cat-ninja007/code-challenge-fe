import { FC } from "react";
import ButtonArrow from "@/components/atom/ButtonArrow";
import Image from "next/image";
import CloseButton from "../../../../public/icons/utils-icon/close-button.png";

interface IHiddenMenu {
  onClose: () => void;
}
const HiddenMenu: FC<IHiddenMenu> = (props: IHiddenMenu) => {
  const { onClose } = props;
  return (
    <>
      <div className="hidden-menu-container bg-courtney-white px-9 h-screen absolute top-0 left-0 right-0">
        <div className="close-button-container pt-6 pb-20 flex justify-end">
          <div onClick={onClose} className="cursor-pointer">
            <Image src={CloseButton} alt="close-button"/>
          </div>
        </div>
        <div className="hidden-menu-navigation mb-16">
          <nav>
            <ul className="w-full flex flex-col gap-8 text-courtney-dark-blue">
              <li>
                <a href="/" className="text-3xl">
                  Home
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a href="/about" className="text-3xl">
                  About
                </a>
                
              </li>
              <li className="flex items-center justify-between">
                <a href="/service" className="text-3xl">
                  Services
                </a>
                
              </li>
              <li>
                <a href="/team" className="text-3xl">
                  Team
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
