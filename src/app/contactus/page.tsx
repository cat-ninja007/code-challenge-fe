import { FC } from "react";
import Contact from "@/components/Contact";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/atom/HeroSection";

const ContactUs: FC = () => {
  return (
    <>
      <Header />
      

      <HeroSection title="Contact Us" subtitle="We'd love to hear from you about how we can help. Get in touch." />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;