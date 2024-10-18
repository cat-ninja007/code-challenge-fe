import { FC } from "react";
import Header from "@/components/sections/Header";
import Jumbotron from "@/components/sections/Jumbotron";
import Solutions from "@/components/sections/Solutions";
import HowToStart from "@/components/sections/HowToStart";
import Expertise from "@/components/sections/Expertise";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/Contact";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Solutions />
      <HowToStart />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;