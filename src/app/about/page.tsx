import { FC } from "react";

import Header from "@/components/sections/Header";
import HeroSection from "@/components/atom/HeroSection";
import Footer from "@/components/sections/Footer";


const About:FC = () => {
  return (
    <>
      <Header />
      <HeroSection title="About Us" subtitle="We specialize in helping you build a team of expert developers" />
      
      <Footer />
    </>
  )
}
export default About;