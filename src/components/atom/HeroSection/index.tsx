import { FC } from "react";
import Image from "next/image";

// import HeroImage from '../../../public/images/hero-image.png'
import HeroImage from '../../../public/images/jumbotron-image.png'

interface IHeroSection {
  title: string;
  subtitle: string;
}

const HeroSection:FC<IHeroSection> = (props: IHeroSection) => {
  const { title, subtitle } = props 
  return(
    <>
      <div className="hero-section-container relative mt-20">
        <Image src={HeroImage} alt="hero-image" className="w-full contain-content"/>
        <div className="black-filter w-full h-full absolute bg-courtney-dark-blue opacity-60 top-0 rounded-bl-[36px]"></div>
        <div className="hero-text-container absolute top-1/3">
            <h2 className="text-5xl lg:text-7xl text-center text-courtney-white font-bold pb-1">{title}</h2>
            <p className="text-base text-courtney-white text-center px-4">{subtitle}</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection