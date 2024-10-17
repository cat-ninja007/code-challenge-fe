import { FC } from "react";
import Image from "next/image";
import ButtonArrow from "@/components/atom/ButtonArrow";

import { Title } from "@/components/atom/Text";

import JumbotronImage from "../../../public/images/jumbotron-image.png"

const Jumbotron: FC = () => {
  return (
    <>
    <div className="jumbotron-container pb-7">
      <div className="jumbotron-image-container pb-9">
        <Image src={JumbotronImage} alt="jumbotron-image" />
      </div>

      <div className="jumbotron-text-container text-courtney-dark-blue px-4">
        <Title 
          text="Building dev team, Quickly and Affordably"
          color="courtney-dark-blue"
        />
        
        <div className="jumbotron-subtitle mb-6">
          <p className="text-xl">We specialized in helping you building a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.</p>
        </div>
        <ButtonArrow title="Build a team" />
      </div>
      
    </div>
    </>
  )
}

export default Jumbotron;