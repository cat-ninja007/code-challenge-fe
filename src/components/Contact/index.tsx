import { FC } from "react";
import Image from "next/image";
import ContactImage from "../../public/images/contact-image-section.png";
import { ContactInput, ContactInputArea } from "./ContactInput";
import ButtonArrow from "../atom/ButtonArrow";

const Contact: FC = () => {
  return (
    <>
      <div className="contact-section-container relative bg-courtney-soft-grey lg:flex lg:flex-row-reverse lg:items-center w-screen">
        {/* <div className="contact-input-container mx-[18px] px-8 pt-9 bg-white border-2 border-green-500 relative mt-72 lg:mr-4 lg:rounded-tl-[17%] lg:py-20 lg:px-24 lg:my-24"> */}
        <div
          className="
          contact-input-container 
          mx-4 
          px-8
          pt-9 
          bg-white 
          
          relative 
          mt-72
          lg:mt-8
          lg:w-[35rem]
          lg:h-[55rem] 
          lg:rounded-tl-[200px] 
          lg:py-20 
          lg:px-20
          lg:z-[5]
          lg:mr-36

          lg:static          
          "
        >
          <div className="contact-input-title">
            <h2 className="text-4xl leading-[46px] text-courtney-dark-blue font-bold">
              Connect With Your Next Great Hire Today!
            </h2>
          </div>

          <div className="contact-input-field py-7">
            <div
              className="contact-input-short-answer lg:flex
             lg:gap-6"
            >
              <div className="lg:w-80">
                <ContactInput
                  label="Company"
                  type="text"
                  placeholder="Your Company"
                />
                <ContactInput
                  label="Your Name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="lg:w-80">
                <ContactInput
                  label="Phone Number"
                  type="number"
                  placeholder="Your Phone Nummber"
                />
                <ContactInput
                  label="Email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="lg:w-[23rem]">
              <ContactInputArea />
            </div>
          </div>

          <div className="contact-privacy-policy-container flex gap-[14px] pb-11">
            <div className="contact-privacy-checkbox w-6 h-6">
              <input type="checkbox" className="py-1 px-1 w-[18px] h-18px]" />
            </div>
            <div className="contact-privacy-text">
              <p className="text-courtney-dark-blue">
                By sending this form I confirm that I have read and accept the{" "}
                <span className="font-bold">Privacy Policy</span>
              </p>
            </div>
          </div>

          <div className="contact-cta-container pb-14 lg:w-80">
            <ButtonArrow title="GET CONSULTATION" />
          </div>
        </div>

        <div className="contact-image-background  absolute lg:z-0 -z-10 top-0 lg:left-10 lg:top-[102px] lg:w-[600px] lg:mt-0">
          <Image
            src={ContactImage}
            alt="contact-image"
            className="rounded-tr-[30%] lg:rounded-none"
          />
        </div>
      </div>
      <hr className="border-1 border-[#C4C4C4] mx-[18px]" />
    </>
  );
};

export default Contact;
