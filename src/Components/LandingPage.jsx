/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React from "react";
import logo from '../assets/logo.png'
import { FaArrowUpLong } from "react-icons/fa6";
export default function LandingPage() {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="-.3"
			className="w-full bg-[#f1f1f1] h-screen pt-1"
		>
			<div className="textstructure mt-40 px-20">
				{["playground", "for the world's", "top 0.01% peoples"].map((item, index) => {
					return (
						<div className="masker">
							<div className="w-fit flex">
								{index === 1 && (
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "9vw" }}
										transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.4 }}
										className="mr-[1vw] w-[9vw] h-[6vw] relative top-[1vw]"
									>
										<img
											className="w-full h-full rounded-md"
											src={logo}
										/>
									</motion.div>
								)}
								<h1 className="flex items-center uppercase h-full text-[8vw] leading-[7.5vw] font-['Anton'] tracking-tight">
									{item}
								</h1>
							</div>
						</div>
					);
				})}
			</div>
			<div className="border-t-[1px] border-[#bababa] mt-36 flex justify-between items-center py-4 px-20 font-['Bebas Neue']">
				{[
					"Rare opportunities. ",
					"Rare access. Rarer people.",
				].map((item, index) => (
					<p className="text-md font-normal tracking-tight leading-none">
						{item}
					</p>
				))}
				<div className="start flex items-center gap-1 ">
					<button className="px-4 py-1  uppercase border-[1px] border-[#3b3b3b] rounded-full font-normal text-md ">
					Join the exclusive club
					</button>
					<button className="w-8 h-8 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
						<span className="rotate-[45deg]">
							<FaArrowUpLong />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
