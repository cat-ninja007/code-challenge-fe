"use client"; 
import { FC } from "react"; 
import Image, { StaticImageData } from "next/image"; 

interface ITeamCard { 
  name: string; 
  position: string;
  country: string; 
  image: string | StaticImageData; 
} 

const TeamCard: FC<ITeamCard> = ({ name, position, image, country }) => { 
  return ( 
    <div className="team-card-container w-64 flex flex-col items-center border rounded-lg shadow-md overflow-hidden p-4"> 
      <div className="card-image mb-4"> 
        <Image src={image} alt={`${name} profile`} width={100} height={100} className="rounded-full" /> 
      </div> 
      <h3 className="text-xl font-semibold text-courtney-dark-blue">{name}</h3> 
      <p className="text-sm text-gray-600">{position}</p> 
      <p className="text-sm text-gray-600">{country}</p> 
    </div> 
  ); 
}; 

export default TeamCard;
