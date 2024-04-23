/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { motion, useAnimation } from 'framer-motion';
import React from 'react'

function Feature() {
	const cards = [useAnimation(),useAnimation()]
	const handleHover = (index) => {
		cards[index].start({y:"0"})
	}
	const handleHoverEnd = (index) => {
		cards[index].start({y:"100%"})
	}
  return (
		<div className="w-full py-20">
			<div className="w-full px-20 border-b-[1px] pb-20">
				<h1 className="text-8xl font-['Neue Montreal'] tracking-tight">
					Featured Projects
				</h1>
			</div>
			<div className="px-20">
				<div className="card w-full flex gap-10 mt-10">
					<motion.div
						onHoverStart={() => handleHover(0)}
						onHoverEnd={() => handleHoverEnd(0)}
						className="cardcontainer relative w-1/2 h-[75vh] rounded-xl"
					>
						<h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-['Test_Founders_Grotesk_X']">
							{"FYDE".split("").map((item, index) => (
								<motion.span
									initial={{ y: "100%" }}
									animate={cards[0]}
									transition={{
										ease: [0.22, 1, 0.36, 1],
										delay: index * 0.054,
									}}
									className="inline-block"
								>
									{item}
								</motion.span>
							))}
						</h1>
						<div className=" card w-full h-full rounded-xl overflow-hidden">
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
							/>
						</div>
					</motion.div>
					<motion.div
						onHoverStart={() => handleHover(1)}
						onHoverEnd={() => handleHoverEnd(1)}
						className="cardcontainer relative w-1/2 h-[75vh] rounded-xl"
					>
						<div className="card w-full h-full overflow-hidden rounded-xl">
							<h1 className="absolute flex overflow-hidden text-[#CDEA68] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-['Test_Founders_Grotesk_X']">
								{"VISE".split("").map((item, index) => (
									// eslint-disable-next-line react/jsx-key
									<motion.span
										initial={{ y: "100%" }}
										animate={cards[1]}
										transition={{
											ease: [0.22, 1, 0.36, 1],
											delay: index * 0.054,
										}}
										className="inline-block"
									>
										{item}
									</motion.span>
								))}
							</h1>
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Feature