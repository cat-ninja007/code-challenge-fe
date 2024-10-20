"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Title, Subtitle } from "@/components/atom/Text";
import ExpertiseCard from "./ExpertiseCard";

import DedicatedTeams from "../../../public/icons/utils-icon/dedicated-team.png"
import StaffAugmentation from "../../../public/icons/utils-icon/staff-augmentation.png";
import SoftwareOutsourcing from "../../../public/icons/utils-icon/software-outsourcing.png";
import RemoteOffice from "../../../public/icons/utils-icon/remote-office.png";

const Expertise: FC = () => {
  const expertise = [
    {
      title: "Dedicated Teams",
      image: DedicatedTeams,
      paragraph:
        "Find your next team member", 
    },
    {
      title: "Staff Augmentation",
      image: StaffAugmentation,
      paragraph:
        "Build a distributed development team",
    },
    {
      title: "Software Outsourcing",
      image: SoftwareOutsourcing,
      paragraph:
        "End-to-End Software Development Outsourcing Solutions",
    },
    {
      title: "Remote Office",
      image: RemoteOffice,
      paragraph:
        "Open your own remote development center and grow your business",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // shohw next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % expertise.length);
  };

  // show prev card
  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + expertise.length) % expertise.length
  //   );
  // };

  // Check if window size is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoslide 3 seecond
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isMobile) {
      timer = setInterval(handleNext, 3000);
    } else {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isMobile]);


  return (
    <>
      <div className="expertise-container px-4 lg:px-[10%] pt-28 mb-32">
        <div className="expertise-header lg:w-[70%]">
          <Subtitle text="Expertise" color="courtney-dark-blue" />
          <Title
            text="Hire Permanent and Remote Developers"
            color="courtney-dark-blue"
          />
          <div className="expertise-paragraph mb-6">
            <p className="text-xl text-courtney-dark-blue">
              From full-time remote engineering teams to hourly contractors, work with remote devs as needed
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {isMobile ? (
            <motion.div
              key={expertise[currentIndex].title}
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ExpertiseCard
                title={expertise[currentIndex].title}
                image={expertise[currentIndex].image}
                paragraph={expertise[currentIndex].paragraph}
              />
            </motion.div>
          ) : (
            <div className="flex space-x-4 justify-between">
              {expertise.map((expert, index) => (
                <ExpertiseCard
                  key={index}
                  title={expert.title}
                  image={expert.image}
                  paragraph={expert.paragraph}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Navigasi untuk mobile */}
        {isMobile && (
          <div className="flex justify-center space-x-2 mt-7 pb-8">
            {expertise.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-courtney-dark-blue"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </>
  )
}

export default Expertise