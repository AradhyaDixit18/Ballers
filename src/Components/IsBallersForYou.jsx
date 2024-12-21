import React from "react";
import { motion } from "framer-motion";
import './WhyBallers.css';

const cardContent = [
  {
    title: "Is Ballers for you?",
    body: "This platform is tailored for Ultra-High-Net-Worth Individuals (UHNIs) and Family Offices who aspire to be part of a passionate and luxurious lifestyle built around sports and are looking for more than just buying and selling sports assets.",
  },
  {
    title: "Who is it for?",
    body: "Sports personalities, actors, influencers, and entrepreneurs with a minimum net worth of $5 million who seek to immerse themselves in the world of sports beyond just the game & transactions.",
  },
];

function IsBallersWithYou() {
  return (
    <div className="w-full p-10 align-center justify-center bg-[#CDEA68] text-black">
      <h1 className="text-6xl flex font-semibold place-content-center">Is Ballers For You?</h1>
      <div className="cards flex justify-center items-center mt-16 space-x-10">
        {cardContent.map((content, index) => (
          <motion.div
            key={index}
            className="card relative  rounded-lg shadow-lg p-6 max-w-md"
            whileHover={{ scale: 1.1 }}
          >
            <div className="card-name text-center text-2xl font-bold uppercase py-4">
              {content.title}
            </div>
            <div className="body-text text-center text-base font-medium px-4">
              {content.body}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default IsBallersWithYou;
