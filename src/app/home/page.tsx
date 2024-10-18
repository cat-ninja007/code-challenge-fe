import { FC } from "react";
import Header from "@/components/sections/Header";
import Jumbotron from "@/components/sections/Jumbotron";
import Solutions from "@/components/sections/Solutions";
import HowToStart from "@/components/sections/HowToStart";
import Expertise from "@/components/sections/Expertise";
import Specialized from "@/components/sections/Specialized";
import Footer from "@/components/sections/Footer";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Solutions />
      <HowToStart />
      <Expertise />
      <Specialized />
      <Footer />
    </>
  );
}

export default Home;