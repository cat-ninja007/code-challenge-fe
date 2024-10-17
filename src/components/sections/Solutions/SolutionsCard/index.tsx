"use client";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ISolutionsCard {
  title: string;
  paragraph: string;
  image: string | StaticImageData;
}

const SolutionsCard: FC<ISolutionsCard> = (props: ISolutionsCard) => {
  const { title, paragraph, image } = props;
  return (
    <div className="
      solutions-card-container 
      flex 
      flex-col
      lg:flex-row
      lg:items-start
      lg:w-[30%]
      items-center 
      gap-3 
      text-courtney-dark-blue 
      pt-10 
      pb-14 
      w-64 
      flex-shrink-0
      ">
      <div className="card-image bg-courtney-bright-yellow w-32 md:w-28 lg:w-16 mb-9">
        <Image src={image} alt="architect-solutions" className="w-32" />
      </div>
      <div className="card-description md:w-3/4">
        <div className="card-title self-start">
          <h3 className="text-2xl md:text-center lg:text-left font-bold">{title}</h3>
        </div>
        <div className="card-paragraph">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsCard;
