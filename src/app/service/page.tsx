import { FC } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import HeroSection from "@/components/atom/HeroSection";

const Service:FC = () => {
  return (
    <>
      <Header />
        <HeroSection title="Our Service" subtitle="We specialize in helping you build a team of expert developers" />
      <Footer />
    </>
  )
}

export default Service;