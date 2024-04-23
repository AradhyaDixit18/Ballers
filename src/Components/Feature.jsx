import React from 'react'

function Feature() {
  return (
		<div className="w-full py-20">
			<div className="w-full px-20 border-b-[1px] pb-20">
				<h1 className="text-8xl font-['Neue Montreal'] tracking-tight">
					Featured Projects
				</h1>
			</div>
			<div className="px-20">
				<div className="card w-full flex gap-10 mt-10">
					<div className="cardcontainer relative w-1/2 h-[75vh] rounded-xl">
						<h1 className="absolute text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-['Test_Founders_Grotesk_X']">
							FYDE
						</h1>
						<div className=" card w-full h-full rounded-xl overflow-hidden">
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
							/>
						</div>
					</div>
					<div className="cardcontainer relative w-1/2 h-[75vh] rounded-xl">
						<h1 className="absolute text-[#CDEA68] right-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-['Test_Founders_Grotesk_X']">
							VISE
						</h1>
						<div className="card w-full h-full overflow-hidden rounded-xl">
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature