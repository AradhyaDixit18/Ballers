/* eslint-disable no-unused-vars */

import React from "react";

function Cards() {
	return (
		<div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
			<div className="cardcontainer h-[50vh] w-1/2">
				<div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
					/>
					<button className="absolute px-5 left-10 bottom-10 py-2 rounded-full border-2">
						&copy;2019-2024
					</button>
				</div>
			</div>
			<div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
				<div className="card relative w-1/2 rounded-xl h-full bg-[#041e1a] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
					/>
					<button className="absolute px-5 left-10 bottom-10 py-2 rounded-full border-2">
						Rating 5.0 on Clutch
					</button>
				</div>
				<div className="card relative w-1/2 rounded-xl h-full bg-[#041916] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
					/>
					<button className="absolute px-5 left-10 bottom-10 py-2 rounded-full border-2">
						Business BootCamp Alumini
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
