import { FC } from "react";

import Header from "@/components/sections/Header";
import Jumbotron from "@/components/sections/Jumbotron";
import Solutions from "@/components/sections/Solutions";
import HowToStart from "@/components/sections/HowToStart";
import Expertise from "@/components/sections/Expertise";
import Specialized from "@/components/sections/Specialized";
import Footer from "@/components/sections/Footer";

import Home from "./home/page";
import About from "./about/page";
import Service from "./service/page";
import Team from "./team/page";

const App:FC = () => {
  return (
    <>
      <Team />
    </>
  )
}

export default App;