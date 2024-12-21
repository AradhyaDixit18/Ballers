import React from "react";
import { motion } from "framer-motion";
import './WhyBallers.css'
const cardContent = [
  {
    title: "Most exclusive, Made Accessible.",
    body: "Front-row tickets, Exclusive sports clubs, Invite-only events, Networking with billionaires - are these things almost impossible to access? Yes. But do members get access to all of them? Also YES!",
  },
  {
    title: "Remarkable Portfolio, Undeniable results.",
    body: "With over 15 years of combined experience, our team has dedicated over 130,000 hours to refining strategies, processes, and resources. Our goal? To deliver exceptional experiences and even better results.",
  },
  {
    title: "Save Time, Save Money.",
    body: "Every second wasted is $$$ wasted. Ballers makes investments and managements of sports assets 5x faster, saving you more than 3000 hours per investment.",
  },
  
];

function WhyBallers() {
  return (
    <div className="w-full p-10 align-center justify-center bg-[#CDEA68] text-black">
      <h1 className="text-6xl flex font-semibold place-content-center">Why Ballers ? </h1>
      <div  className="cards flex justify-center items-center mt-16 space-x-10">
        {cardContent.map((content, index) => (
          <motion.div
            key={index}
            className="card relative"
            whileHover={{ scale: 1.3 }}
          
          >
            <div className="card-name text-center text-xl font-bold uppercase py-4">
              {content.title}
            </div>
            <div className="body-text text-center text-sm font-medium px-4">
              {content.body}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhyBallers;