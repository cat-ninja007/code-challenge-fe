"use client";
import { FC, useState } from "react";

interface IButtonReguler {
  title: string;
}

const ButtonReguler: FC<IButtonReguler> = (props: IButtonReguler) => {
  const { title } = props;
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true); 
  };

  const handleMouseUp = () => {
    setIsActive(false); 
  };

  return (
    <div
      className={`
        button-container 
        w-full
        flex 
        justify-center
        items-center
        rounded-lg
        font-bold
        ${isActive ? "bg-orange-500" : "bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow"}
      `}
      onMouseEnter={() => setIsActive(true)}  
      onMouseLeave={() => setIsActive(false)} 
      onMouseDown={handleMouseDown}           
      onMouseUp={handleMouseUp}               
      onFocus={() => setIsActive(true)}       
      onBlur={() => setIsActive(false)}       
    >
      <button className="w-full h-14 text-courtney-white">{title}</button>
    </div>
  );
};

export default ButtonReguler;