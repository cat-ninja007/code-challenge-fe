import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IProcessCard {
  number: string;
  title: string;
  image: string | StaticImageData;
}

const ProcessCard: FC<IProcessCard> = (props: IProcessCard) => {
  const { number, title, image } = props;
  return (
    <div className="process-card-container flex flex-col items-center gap-3 pb-20">
      <div className="process-image">
        <Image src={image} alt={title} />
      </div>
      <div className="process-text flex justify-center items-end gap-3">
        <p className="process-number text-5xl font-bold text-courtney-dark-blue">{number}</p>
        <p className="process-desc text-3xl font-bold text-courtney-dark-blue">{title}</p>
      </div>
    </div>
  );
};

export default ProcessCard;