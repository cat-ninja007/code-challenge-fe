"use client";
import { FC, useState } from "react";

interface IButtonReguler {
  title: string;
}

const ButtonReguler: FC<IButtonReguler> = (props: IButtonReguler) => {
  const { title } = props;
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true); // Saat tombol ditekan
  };

  const handleMouseUp = () => {
    setIsActive(false); // Saat tombol dilepaskan (kembali ke gradien)
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


// "use client";
// import { FC, useState } from "react";
// import Image from "next/image";
// interface IButtonReguler {
//   title: string;
// }

// const ButtonReguler: FC<IButtonReguler> = (props: IButtonReguler) => {
//   const { title } = props;
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <div
//         className={`
//         button-container 
//         w-full
//         flex 
//         justify-center
//         text-courtney-white 
//         transition duration-200 ease-in-out
//         items-center
//         rounded-lg
//         font-bold
//         ${isHovered ? "bg-orange-500" : "bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow"}
//         `}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onFocus={() => setIsHovered(true)} 
//         onBlur={() => setIsHovered(false)}
//       >
//         <button className="w-full h-14">{title}</button>
//       </div>
//     </>
//   );
// };

// export default ButtonReguler;
