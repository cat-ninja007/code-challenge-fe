import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IExpertiseCard {
  title: string;
  paragraph: string;
  image: string | StaticImageData;
}

const ExpertiseCard: FC<IExpertiseCard> = (props: IExpertiseCard) => {
  const { title, paragraph, image } = props;

  return (
    <div className="
      expertise-card-container 
      flex 
      flex-col
      lg:items-start
      lg:w-[20%]
      items-center 
      gap-3 
      text-courtney-dark-blue 
      pt-10 
      pb-14 
      w-64 
      flex-shrink-0
      h-[380px]
      ">
      <div className="card-image bg-courtney-bright-yellow w-32 md:w-28 lg:w-16 mb-9 lg:mb-1">
        <Image src={image} alt={title} className="w-32" />
      </div>
      <div className="card-description md:w-3/4">
        <div className="card-title self-start">
          <h3 className="text-2xl text-center lg:text-left font-bold">{title}</h3>
        </div>
        <div className="card-paragraph">
          <p className="text-center lg:text-left">{paragraph}</p>
        </div>
      </div>
    </div>
  );   
}

export default ExpertiseCard;