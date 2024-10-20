import { FC } from "react";
import Image from "next/image";
import ButtonArrow from "@/components/atom/ButtonArrow";

import { Title } from "@/components/atom/Text";

import JumbotronImage from "../../../public/images/jumbotron-image.png";

const Jumbotron: FC = () => {
  return (
    <>
      <div className="jumbotron-container pb-7 lg:pb-20 pt-20 mt-20 lg:flex lg:items-center pr-10 lg:flex-row-reverse">
        <div className="jumbotron-image-container pb-9 lg:w-[100%]">
          <Image src={JumbotronImage} alt="jumbotron-image" />
        </div>

        <div className="jumbotron-text-container lg:py-10 lg:relative lg:left-[5%] lg:top-5 bg-courtney-white text-courtney-dark-blue px-4  lg:w-[730px] rounded-tr-[20%] ">
          <Title
            text="Building dev team, Quickly and Affordably"
            color="courtney-dark-blue"
          />

          <div className="jumbotron-subtitle mb-6">
            <p className="text-xl lg:text-lg">
              We specialized in helping you building a team of expert
              developers, testers, and leaders. We are setup to deliver long
              term solutions, or scale to different needs quickly.
            </p>
          </div>
          <div className="w-80">
            <ButtonArrow title="Build a team" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
