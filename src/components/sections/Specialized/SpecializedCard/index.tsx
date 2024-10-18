import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ISpecializedCard {
  title: string;
  image: string | StaticImageData;
}

const SpecializedCard: FC<ISpecializedCard> = (props: ISpecializedCard) => {
  const { title, image } = props;
  return (
    <>
      <div className="specialized-card-container w-[300px] flex mb-[27px]">
        <div className="yellow-badge w-[13px] h-[72px] bg-courtney-bright-yellow rounded-l-[12px]"></div>
        <div className="card-content w-[90%] h-[72px] bg-white rounded-r-[12px] flex">
          <div className="card-image flex items-center gap-[22px] pl-[22px]">
            <Image src={image} alt={title} className="w-9" />
            <p className="text-sm font-semibold text-courtney-dark-blue">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedCard;
