import { FC } from "react";

import Header from "@/components/sections/Header";
import Jumbotron from "@/components/sections/Jumbotron/Jumbotron";
import Solutions from "@/components/sections/Solutions";
import HowToStart from "@/components/sections/HowToStart";

const App:FC = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Solutions />
      <HowToStart />
    </>
  )
}

export default App;