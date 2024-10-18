"use client";
import { FC} from "react";
import { Title, Subtitle } from "@/components/atom/Text";


const Specialized: FC = () => {

  return (
    <>
      <div className="specialized-container px-4 lg:px-[10%] h-screen pt-28 mb-32 bg-courtney-normal-grey">
        <div className="specialized-header lg:w-[40%]">
          <Subtitle text="Specialized" color="courtney-dark-blue" />
          <Title
            text="Specialized Staff We Provide"
            color="courtney-dark-blue"
          />
        </div>
        

        
      </div>
    </>
  );
};

export default Specialized;
