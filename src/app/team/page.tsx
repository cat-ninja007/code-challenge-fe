'use client';
import { FC, useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import HeroSection from "@/components/atom/HeroSection";
import TeamCard from "@/components/atom/TeamCard";
import { Title, Subtitle } from "@/components/atom/Text";

const Team:FC = () => {
  const [members, setMembers] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=10"); 
        setMembers(response.data.results); 
      } catch (error) {
        console.error("Error fetching team data:", error); 
      } finally {
        setLoading(false); 
      }
    };

    fetchTeamData(); 
  }, []);

  return (
    <>
      <Header />
      <HeroSection title="Our Team" subtitle="We specialize in helping you build a team of expert developers" />
      
      <div className="team-section px-4 mt-8">
        <Subtitle text="Meet Our Team" color="courtney-dark-blue" />
        <Title text="Our Dedicated Team Members" color="courtney-dark-blue" />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
            {members.map((member, index) => (
              <div className="flex justify-center"> 
                <TeamCard 
                  key={index} 
                  name={`${member.name.first} ${member.name.last}`} 
                  position="Developer"
                  image={member.picture.thumbnail} 
                  country={member.location.country} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </>
  )
}

export default Team;