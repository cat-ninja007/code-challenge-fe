import { FC } from "react";
import Image from "next/image";
import ContactImage from "../../public/images/contact-image-section.png";
import { ContactInput, ContactInputArea } from "./ContactInput";

const Contact: FC = () => {
  return (
    <>
      <div className="contact-section-container relative mt-[379px] pb-12">
        <div className="contact-image-background absolute -z-10 top-[-379px]">
          <Image src={ContactImage} alt="contact-image" />
        </div>
        <div className="contact-input-container mx-[18px] px-8 pt-9 bg-white relative">
          <div className="contact-input-title">
            <h2 className="text-4xl leading-[46px]">
              Connect With Your Next Great Hire Today!
            </h2>
          </div>
          <div className="contact-input-field py-7">
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
            <ContactInput
              label="Phone Number"
              type="number"
              placeholder="Your Phone Nummber"
            />
            <ContactInput label="Email" type="email" placeholder="Your Email" />
            <ContactInputArea />
          </div>

          <div className="contact-privacy-policy-container flex gap-[14px] pb-11">
            <div className="contact-privacy-checkbox w-6 h-6">
              <input type="checkbox" className="py-1 px-1 w-[18px] h-18px]" />
            </div>
            <div className="contact-privacy-text">
              <p>
                By sending this form I confirm that I have read and accept the{" "}
                <span className="font-bold">Privacy Policy</span>
              </p>
            </div>
          </div>

          <div className="contact-cta-container pb-14">
            <button className="bg-gradient-to-r from-courtney-dark-yellow to-courtney-light-yellow py-[15px] w-full font-semibold text-white rounded-lg">
              GET CONSULTATION &rarr;
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 border-[#C4C4C4] mx-[18px]" />
    </>
  );
};

export default Contact;
