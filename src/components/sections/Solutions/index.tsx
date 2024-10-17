"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { Title, Subtitle } from "@/components/atom/Text";
import SolutionsCard from "./SolutionsCard";

import ArchitectSolutions from "../../../public/icons/utils-icon/cube 1.png";
import EngineerSolutions from "../../../public/icons/utils-icon/software-application 1.png";
import ReEngineerBusiness from "../../../public/icons/utils-icon/technical-support 1.png";

const Solutions: FC = () => {
  const solutions = [
    {
      title: "Engineer your Solution",
      image: EngineerSolutions,
      paragraph: "We promptly put together your nearshore engienering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top1% Tech Talent, and industry-specific expertise.", 
    },
    {
      title: "Architect Your Solution",
      image: ArchitectSolutions,
      paragraph: "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.",
    },
    {
      title: "ReEngineer your Business Process",
      image: ReEngineerBusiness,
      paragraph: "Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficiient and strong business that can meet demands at scale",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length);
  };

  
  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer); 
  }, []);

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
            We specialize in helping you build a team of expert developers, testers, and leaders.
          </p>
        </div>

        <div className="relative overflow-hidden"> 
          <motion.div
            key={solutions[currentIndex].title} 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}  
            exit={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.5 }} 
          >
            <SolutionsCard
              title={solutions[currentIndex].title}
              image={solutions[currentIndex].image}
              paragraph={solutions[currentIndex].paragraph}
            />
          </motion.div>

          
          <div className="flex justify-center space-x-2 mt-7 pb-8">
            {solutions.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-courtney-dark-blue" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;