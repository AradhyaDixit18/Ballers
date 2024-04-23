import React from 'react'

function About() {
  return (
		<div className="w-full p-20 text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
			<h1 className="font-['Neue Montreal'] text-[4.5vw] leading-[4.5vw] tracking-tight">
				Ochi is a strategic partner for fast-growing tech businesses that need
				to raise funds, sell products, explain complex ideas, and hire great
				people.
			</h1>
			<div className="w-full flex gap-5 pt-10 border-t-[1px] border-zinc-900 mt-20">
				<div className="w-1/2">
					<h1 className="text-7xl">Our Approach:</h1>
					<button className="flex gap-10 uppercase items-center px-10 py-6 mt-10 rounded-full text-white bg-zinc-900">
						Read More
						<div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
					</button>
				</div>
				<div className="w-1/2 h-[70vh] rounded-3xl bg-[#647624]"></div>
			</div>
		</div>
	);
}

export default About