import React, { FC } from "react";

interface CardProps {
  name: string;
  role: string;
  imageUrl: string;
  rating: number;
}

const Hero: FC<CardProps> = ({ name, role, imageUrl, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt="" />
      <p>{role}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Hero;
