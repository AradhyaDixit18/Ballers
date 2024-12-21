/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

function Eyes() {
	const [rotate, setrotate] = useState(0);
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setrotate(angle - 180);
		});
	});

	return (
		<div className="eyes w-full h-screen overflow-hidden  rounded-xl">
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="-.7"
				className="relative w-full h-full bg-[#cdea68]"
			>
				{/* Updated Content */}
				<div className="flex flex-col items-center justify-center text-center font-['Anton']">
					<div className="text-[100px] uppercase leading-[12vw]">
						Playground for the world’s 0.01%
					</div>
					<div className="text-[40px] mt-4 leading-[5vw]">
						Rare opportunities. Rare access. Rarer people.
					</div>

					<p className="mt-6 text-xl font-normal">
						A playground for the wealthy and successful to get access to the most exclusive assets, clubs and people in sports.
					</p>

					{/* Call to Action */}
					<div className="mt-8">
						<button className="flex gap-10 uppercase items-center justify-center px-5 py-4 mt-[2vw] rounded-full text-white bg-zinc-900">
							Join the exclusive club
							<div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
						</button>
					</div>

					<div className="text-[30px] mt-[4vw] uppercase font-['Bebas Neue']">
						How it works?
					</div>

					{/* How it works steps */}
					<div className="mt-[4vw]">
						<div className="text-[20px]">
							<b>Get invited:</b> Ballers is an exclusive club limited to 1000 members—each representing the pinnacle of excellence. To join this esteemed group, you must be endorsed by a current member and apply for membership.
						</div>
						<div className="text-[20px] mt-4">
							<b>Get approved:</b> We perform thorough background checks on anyone that gets invited and only extend exclusive, non-transferable memberships to those who meet our stringent criteria.
						</div>
						<div className="text-[20px] mt-4">
							<b>Get started:</b> Invest in sports assets, build a portfolio, access exclusive events, network with billionaires, and be part of a lifestyle that brings compounding returns to both your quality of life and wealth.
						</div>
					</div>

					{/* Why sports as an asset */}
					<div className="text-[30px] mt-[6vw] font-['Bebas Neue']">
						Why Sport as an asset class?
					</div>
					<div className="mt-[4vw] text-[20px]">
						Sports beyond the game. Valued at nearly $1 trillion, sports is more than just about the game. With top athletes, exclusive clubs, global leagues, and more, it offers a vast opportunity for lifestyle of experiences and investments.
					</div>

					<div className="text-[30px] mt-[6vw] font-['Bebas Neue']">
						Exclusive access. Extraordinary Returns.
					</div>
					<div className="mt-[4vw] text-[20px]">
						Wealth creation hinges on spotting the right opportunities. Given sports' substantial potential upside, it's an opportunity too big to miss.
					</div>

					{/* More sections */}
					<div className="text-[30px] mt-[6vw] font-['Bebas Neue']">
						For those who don’t just play the game.
					</div>
					<div className="mt-[4vw] text-[20px]">
						It's the 0.01% experience for the 0.01%. Get access to exclusive events, invite-only clubs, unique opportunities, and VIPs. It's a lifestyle that yields compounded returns in experiences & wealth.
					</div>

					<div className="mt-[8vw] text-[30px] font-['Bebas Neue']">
						DARE TO DREAM? DARE TO JOIN!
					</div>

					{/* Ballers Benefits */}
					<div className="mt-[8vw]">
						<div className="text-[30px] font-['Bebas Neue']">
							Why Ballers?
						</div>
						<div className="mt-6 text-[20px]">
							<b>Most exclusive, Made Accessible:</b> Front-row tickets, Exclusive sports clubs, Invite-only events, Networking with billionaires – things almost impossible to access? Yes. But do members get access to all of them? Also YES!
						</div>
						<div className="mt-6 text-[20px]">
							<b>Remarkable Portfolio, Undeniable results:</b> With over 15 years of combined experience, our team has dedicated over 130,000 hours to refining strategies, processes, and resources. Our goal? To deliver exceptional experiences and even better results.
						</div>
						<div className="mt-6 text-[20px]">
							<b>Save Time, Save Money:</b> Every second wasted is $$$ wasted. Ballers makes investments and management of sports assets 5x faster, saving you more than 3000 hours per investment.
						</div>
					</div>

					{/* Is Ballers for you? */}
					<div className="mt-[8vw]">
						<div className="text-[30px] font-['Bebas Neue']">
							Is Ballers for you?
						</div>
						<div className="mt-6 text-[20px]">
							This platform is tailored for Ultra-High-Net-Worth Individuals (UHNIs) and Family Offices who aspire to be part of a passionate and luxurious lifestyle built around sports and are looking for more than just buying and selling sports assets.
						</div>
					</div>

					<div className="mt-[8vw]">
						<div className="text-[30px] font-['Bebas Neue']">
							Who is it for?
						</div>
						<div className="mt-6 text-[20px]">
							Sports personalities, actors, influencers, and entrepreneurs with a minimum net worth of $5 million who seek to immerse themselves in the world of sports beyond just the game & transactions.
						</div>
					</div>

					{/* Final call */}
					<div className="mt-[8vw]">
						<button className="flex gap-10 uppercase items-center justify-center px-5 py-4 mt-[2vw] rounded-full text-white bg-zinc-900">
							Join the exclusive club
							<div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Eyes;
