"use client";
import { FC } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Title, Subtitle } from "@/components/atom/Text";

import HeroSection from "@/components/atom/HeroSection";
import SpecializedCard from "@/components/sections/Specialized/SpecializedCard";
import { specialized } from "@/data/specialized";

const Service: FC = () => {
  return (
    <>
      <Header />
      <HeroSection
        title="Our Service"
        subtitle="We specialize in helping you build a team of expert developers"
      />
      <div className="mt-20 px-4">
        <Subtitle text="Specialized" color="courtney-dark-blue" />
        <Title text="Specialized Staff We Provide" color="courtney-dark-blue" />
      </div>
      <div className="bg-courtney-soft-grey py-10 rounded-3xl mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {specialized.map((item, index) => (
          <div key={index} className="flex justify-center"> 
            <SpecializedCard 
              title={item.title} 
              image={item.image} 
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Service;
