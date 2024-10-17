import { FC } from "react";
import { Title, Subtitle } from "@/components/atom/Text";
import ProcessCard from "./ProcessCard";

import YouAsk from '../../../public/icons/utils-icon/you-ask.png'
import WeProceed from '../../../public/icons/utils-icon/we-proceed.png'
import Negotiate from '../../../public/icons/utils-icon/negotiate.png'
import YouGet from '../../../public/icons/utils-icon/you-get.png'

const HowToStart: FC = () => {
  return (
    <>
    <div className="process-container bg-gradient-to-r from-courtney-light-yellow to-courtney-dark-yellow pb-8">
      <div className="process-header flex flex-col items-center pt-16 px-16 pb-14">
        <Subtitle text="How to start" color="courtney-white" />
        <Title text="Easy Process" color="courtney-white" />
        <div className="process-paragraph">
          <p className="text-center lg:font-bold text-courtney-dark-blue">We specialize in helping you build a team of expert developers, testers, and leaders.</p>
        </div>
      </div>
      <div className="process-content lg:flex lg:items-end lg:justify-center lg:space-x-10">
        <ProcessCard number="01" title="You Ask" image={YouAsk}/>
        <ProcessCard number="02" title="We Proceed" image={WeProceed}/>
        <ProcessCard number="03" title="Negotiate" image={Negotiate}/>
        <ProcessCard number="04" title="You Get" image={YouGet}/>        
      </div>
    </div>
    </>
  )
}

export default HowToStart;