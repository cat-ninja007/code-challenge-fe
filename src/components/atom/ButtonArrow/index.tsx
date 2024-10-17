"use client";
import { FC, useState } from "react";
import Image from "next/image";
import RightArrow from '../../../public/icons/utils-icon/right-arrow.png'

interface IButtonArrow {
  title: string;
}

const ButtonArrow: FC<IButtonArrow> = (props: IButtonArrow) => {
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
      <button className="w-full h-14 text-courtney-white flex justify-center items-center">
        {title}
        <Image src={RightArrow} alt="right-arrow" className="relative -right-3"/>
        </button>
    </div>
  );
};

export default ButtonArrow;

// import { FC } from "react";
// import Image from "next/image";
// import RightArrow from '../../../public/icons/utils-icon/right-arrow.png'

// interface IButtonArrow {
//   title: string;
// }

// const ButtonArrow:FC<IButtonArrow> = (props:IButtonArrow) => {
//   const { title } = props;

//   return (
//     <>
//       {/* <div className="button-container w-full"> */}
//         <button className="
//           w-full 
//           h-14 
//           bg-gradient-to-r 
//           from-courtney-dark-yellow 
//           to-courtney-light-yellow 
//           text-courtney-white 
//           flex 
//           justify-center 
//           items-center
//           rounded-lg
//           font-bold
//           hover:bg-courtney-dark-yellow
//           ">
//           {title}
//           <Image src={RightArrow} alt="right-arrow" className="relative -right-3"/>
//         </button>
//       {/* </div> */}
//     </>
//   )
// }

// export default ButtonArrow