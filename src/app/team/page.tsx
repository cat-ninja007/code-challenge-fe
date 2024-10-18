'use client';
import { FC, useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import HeroSection from "@/components/atom/HeroSection";
import TeamCard from "@/components/atom/TeamCard";
import { Title, Subtitle } from "@/components/atom/Text";

// Define the interface for TeamMember
interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  location: {
    country: string;
  };
}

const Team:FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]); // Updated type
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=10"); // Fetch data from API
        setMembers(response.data.results); // Set the team members
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
              <div key={index} className="flex justify-center"> 
                <TeamCard 
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
