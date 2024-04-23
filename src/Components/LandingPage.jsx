/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
export default function LandingPage() {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="-.3"
			className="w-full bg-zinc-900 h-screen pt-1"
		>
			<div className="textstructure mt-40 px-20">
				{["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
					return (
						<div className="masker">
							<div className="w-fit flex">
								{index === 1 && (
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "9vw" }}
										transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
										className="mr-[1vw] rounded-md w-[9vw] h-[6vw] relative top-[1vw] bg-green-500"
									></motion.div>
								)}
								<h1 className="flex items-center uppercase h-full text-[9vw] leading-[7vw] font-['Test_Founders_Grotesk_X'] font-bold">
									{item}
								</h1>
							</div>
						</div>
					);
				})}
			</div>
			<div className="border-t-[1px] border-zinc-800 mt-36 flex justify-between items-center py-5 px-20">
				{[
					"For public and private companies",
					"From the first pitch to IPO",
				].map((item, index) => (
					<p className="text-md font-light tracking-tight leading-none">
						{item}
					</p>
				))}
				<div className="start flex items-center gap-5">
					<div className="px-5 py-2 uppercase border-[1px] border-zinc-500 rounded-full font-light text-md">
						Start the Project
					</div>
					<div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
						<span className="rotate-[45deg]">
							<FaArrowUpLong />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
