import { FC } from "react";
import Image from "next/image";
import { Title, Subtitle } from "@/components/atom/Text";
import SolutionsCard from "./SolutionsCard";

import ArchitectSolutions from "../../../public/icons/utils-icon/cube 1.png";
import EngineerSolutions from "../../../public/icons/utils-icon/software-application 1.png";
import ReEngineerBusiness from "../../../public/icons/utils-icon/technical-support 1.png";

const Solutions: FC = () => {
  return (
    <>
      <div className="solutions-container px-4 mt-8">
        <Subtitle text="Solutions" color="courtney-dark-blue" />
        <Title
          text="Software Solutions, with experts software engineering teams"
          color="courtney-dark-blue"
        />
        <div className="solutions-paragraph mb-6">
          <p className="text-xl text-courtney-dark-blue">
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
        </div>

        <SolutionsCard
          title="Engineer your Solution"
          image={EngineerSolutions}
          paragraph="Our team in on you operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals."
        />
        <SolutionsCard
          title="Engineer your Solution"
          image={EngineerSolutions}
          paragraph="Our team in on you operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals."
        />
        <SolutionsCard
          title="Engineer your Solution"
          image={EngineerSolutions}
          paragraph="Our team in on you operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals."
        />

        
      </div>
    </>
  );
};

export default Solutions;