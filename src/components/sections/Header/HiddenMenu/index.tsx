import { FC } from "react";
import ButtonReguler from "@/components/atom/ButtonReguler";
import ButtonArrow from "@/components/atom/ButtonArrow";

const HiddenMenu:FC = () => {


  return (
    <>
    <div className="hidden-menu-container px-9">
      <h1>This is Hidden Menu</h1>
      <ButtonReguler title="Build a team"/>
      <div className="mt-[50px]">

        <ButtonArrow  title="Build a team"/>
      </div>

    </div>
    </>
  )
}

export default HiddenMenu;