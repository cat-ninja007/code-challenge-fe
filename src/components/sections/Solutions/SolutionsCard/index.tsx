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
    <div className="solutions-card-container flex flex-col items-center gap-3 text-courtney-dark-blue pt-10 pb-14 w-64 flex-shrink-0"> 
      <div className="card-image bg-courtney-bright-yellow w-32 mb-9">
        <Image src={image} alt="architect-solutions" className="w-32" />
      </div>
      <div className="card-title self-start">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="card-paragraph">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SolutionsCard;