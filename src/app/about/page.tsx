import { FC } from "react";

import Header from "@/components/sections/Header";
import HeroSection from "@/components/atom/HeroSection";
import Footer from "@/components/sections/Footer";

const About: FC = () => {
  return (
    <>
      <Header />
      <div>
        <HeroSection
          title="About Us"
          subtitle="We specialize in helping you build a team of expert developers"
        />
      </div>
      <div className="about-content px-4 lg:px-10 mt-8">
        {/* Company History Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-courtney-dark-blue mb-4">
            Company History
          </h2>
          <p className="text-courtney-dark-blue ">
            Founded in 2010, our company has rapidly evolved from a small
            software startup into a leading provider of software development and
            outsourcing solutions. Over the years, we have built a reputation
            for delivering high-quality services and innovative technology
            solutions tailored to our clients&#39; needs. Our journey began with
            a dedicated team of passionate developers, and today, we are proud
            to host a myriad of talented professionals who contribute to our
            success.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-courtney-dark-blue mb-4">
            Team
          </h2>
          <p className="text-courtney-dark-blue ">
            Our team is composed of experts from various fields including
            software engineering, project management, and design. Each member is
            strategically selected for their skills and experience, ensuring
            that our clients receive the best possible service. We believe in
            fostering a collaborative environment where innovation thrives,
            allowing us to deliver exceptional results for our clients. Our
            project managers and technical leads work closely with developers to
            ensure seamless project execution and communication.
          </p>
        </section>

        {/* Culture Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-courtney-dark-blue mb-4">
            Culture
          </h2>
          <p className="text-courtney-dark-blue ">
            At our software house, we cultivate a culture of openness,
            collaboration, and continuous improvement. We prioritize the
            well-being of our team members and encourage professional growth
            through various training programs and workshops. Our inclusive
            environment promotes diverse perspectives, which fosters creativity
            and leads to innovative software solutions. We believe that a happy
            team leads to successful projects and satisfied clients.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default About;
