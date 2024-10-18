"use client";
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Title, Subtitle } from "@/components/atom/Text";
import SpecializedCard from "./SpecializedCard";
import Image from "next/image";

import FrontendEngineers from "../../../public/icons/tech-icon/frontend-engineers.png";
import FullstackEngineers from "../../../public/icons/tech-icon/fullstack-engineers.png";
import UiUxEngineers from "../../../public/icons/tech-icon/uiux-engineers.png";
import QaEngineers from "../../../public/icons/tech-icon/qa-engineers.png";
import ProductDesigner from "../../../public/icons/tech-icon/product-designer.png";

import AngularDevelopers from "../../../public/icons/tech-icon/angular-developers.png";
import DevopEngineers from "../../../public/icons/tech-icon/devops-devsecops-engineer.png";
import PhpDevelopers from "../../../public/icons/tech-icon/php-developers.png";
import WordpressDevelopers from "../../../public/icons/tech-icon/wordpress-cms-developers.png";
import AndroidIosDevelopers from "../../../public/icons/tech-icon/mobile-app-developers.png";

import AiMlEngineers from "../../../public/icons/tech-icon/ai-ml-engineers.png";
import DataScientistEngineers from "../../../public/icons/tech-icon/data-scienteis-engineers.png";
import ProjectManagers from "../../../public/icons/tech-icon/project-managers.png";
import BusinessAnalyst from "../../../public/icons/tech-icon/business-analyst.png";
import DatabaseAdmin from "../../../public/icons/tech-icon/database-admin.png";

import InformationSecurityEngineers from "../../../public/icons/tech-icon/information-security-engineers.png";
import ApplicationSecurityEngineers from "../../../public/icons/tech-icon/application-security-engineers.png";
import SolutionArchitects from "../../../public/icons/tech-icon/solution-architects.png";
import TechLeads from "../../../public/icons/tech-icon/tech-leads.png";
import GolangDev from "../../../public/icons/tech-icon/golang-dev.png";

const Specialized: FC = () => {
  const specialized = [
    {
      title: "Frontend Engineers",
      image: FrontendEngineers,
    },
    {
      title: "Fullstack Engineers",
      image: FullstackEngineers,
    },
    {
      title: "UI/UX Engineers",
      image: UiUxEngineers,
    },
    {
      title: "QA Engineers",
      image: QaEngineers,
    },
    {
      title: "Product Designer",
      image: ProductDesigner,
    },
    {
      title: "Angular Developers",
      image: AngularDevelopers,
    },
    {
      title: "Devops/Devsecops Engineers",
      image: DevopEngineers,
    },
    {
      title: "PHP Developers",
      image: PhpDevelopers,
    },
    {
      title: "Wordpress Developers",
      image: WordpressDevelopers,
    },
    {
      title: "Database Admins",
      image: DatabaseAdmin,
    },
    {
      title: "AI/ML Engineers",
      image: AiMlEngineers,
    },
    {
      title: "Data Scientist Engineers",
      image: DataScientistEngineers,
    },
    {
      title: "Project Managers",
      image: ProjectManagers,
    },
    {
      title: "Business Analysts",
      image: BusinessAnalyst,
    },
    {
      title: "Information Security Engineers",
      image: InformationSecurityEngineers,
    },
    {
      title: "Application Security Engineers",
      image: ApplicationSecurityEngineers,
    },
    {
      title: "Android/iOS Developers",
      image: AndroidIosDevelopers,
    },
    {
      title: "Solution Architects",
      image: SolutionArchitects,
    },
    {
      title: "Tech Leads / Team Leas",
      image: TechLeads,
    },
    {
      title: "Golang Dev",
      image: GolangDev,
    },
  ];

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
        

        {/* <div className="specialized-card-container pb-10 flex w-full">
          <div className="first-group">
            <SpecializedCard
              title="Frontend Engineers"
              image={FrontendEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
          </div>
          <div className="second-group">
            <SpecializedCard
              title="Frontend Engineers"
              image={FrontendEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
          </div>
          <div className="third-group">
            <SpecializedCard
              title="Frontend Engineers"
              image={FrontendEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
          </div>
          <div className="fourth-group">
            <SpecializedCard
              title="Frontend Engineers"
              image={FrontendEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
            <SpecializedCard
              title="Fullstack Engineers"
              image={FullstackEngineers}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Specialized;
