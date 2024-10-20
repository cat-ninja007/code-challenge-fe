import { FC } from "react";
import Image from "next/image";

import FooterLogo from "../../../public/images/courtney-logo.png";
import Phone from "../../../public/icons/contact-icon/phone-icon.png";
import Email from "../../../public/icons/contact-icon/email-icon.png";
import Location from "../../../public/icons/contact-icon/location-icon.png";

import Linkedin from "../../../public/icons/contact-icon/linkedin-icon.png";
import Facebook from "../../../public/icons/contact-icon/facebook-icon.png";
import Instagram from "../../../public/icons/contact-icon/instagram-icon.png";
import Twitter from "../../../public/icons/contact-icon/twitter-icon.png";
import Youtube from "../../../public/icons/contact-icon/youtube-icon.png";

const Footer: FC = () => {
  return (
    <>
      <div className="footer-container px-4 text-courtney-dark-blue border-t-2 border-courtney-soft-grey pt-10">
        <div className="footer-top lg:flex justify-between">
        
        {/* Courtney Lanka */}
          <div className="information-container w-1/4">
            <div className="footer-logo pb-7">
              <Image src={FooterLogo} alt="footer-logo" className="pb-8" />
              <p className="text-lg pb-8">
                Expertly trained, battle-tested, elite software developers on
                demand
              </p>
            </div>
            <div className="footer-contact-container flex flex-col gap-7 text-lg pb-9">
              <div className="contact-item flex gap-5">
                <div className="contact-item-icon">
                  <Image src={Phone} alt="phone-icon" />
                </div>
                <div className="contact-item-text">
                  <p>+94 713249222</p>
                </div>
              </div>
              <div className="contact-item flex gap-5">
                <div className="contact-item-icon">
                  <Image src={Email} alt="phone-icon" />
                </div>
                <div className="contact-item-text">
                  <p>hello@courtney.lk</p>
                </div>
              </div>
              <div className="contact-item flex gap-5">
                <div className="contact-item-icon">
                  <Image src={Location} alt="phone-icon" />
                </div>
                <div className="contact-item-text">
                  <p>Courtney Lanka (Private) Limited</p>
                  <p>Level 35</p>
                  <p>World Trade Center</p>
                  <p>Colombo 01</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="footer-company-container flex flex-col gap-6 text-courtney-dark-blue mb-16">
            <h4 className="pb-2 font-bold">Company</h4>
            <p>About Us</p>
            <p>Success Stories</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>

          {/* Services */}
          <div className="footer-services-container flex flex-col gap-6 text-courtney-dark-blue mb-16">
            <h4 className="pb-2 font-bold">Services</h4>
            <p>Hire Permanent Staff</p>
            <p>Staff Augmentation</p>
            <p>Software Outsourcing</p>
            <p>Build Remote Office</p>
          </div>

          {/* How to Start */}
          <div className="footer-start-container flex flex-col gap-6 text-courtney-dark-blue mb-16">
            <h4 className="pb-2 font-bold">How to Start</h4>
            <p>You Asked</p>
            <p>We Proceed</p>
            <p>Negotiate</p>
            <p>You Get</p>
          </div>
        </div>

        <div className="social-media-container">
          <p className="text-lg text-courtney-dark-blue font-bold pb-5">
            Follow us
          </p>
          <div className="social-media-icons flex gap-11 justify-center lg:justify-start mb-7">
            <Image src={Linkedin} alt="Linkedin" className="cursor-pointer" />
            <Image src={Facebook} alt="Facebook" className="cursor-pointer" />
            <Image src={Instagram} alt="Instagram" className="cursor-pointer" />
            <Image src={Twitter} alt="Twitter" className="cursor-pointer" />
            <Image src={Youtube} alt="Youtube" className="cursor-pointer" />
          </div>
          <hr className="hidden lg:block" />
          <p className="text-lg text-courtney-dark-blue pt-5 mb-20">
            &copy; 2022 courtney
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
