/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png'
function Navbar() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// if scrolling down, hide the navbar
				setShow(false);
			} else {
				// if scrolling up, show the navbar
				setShow(true);
			}

			// remember the current page location for the next move
			setLastScrollY(window.scrollY);
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);

	return (
		<div
			className={`transform transition-transform duration-700 ${
				show ? "translate-y-0" : "-translate-y-full"
			} fixed backdrop-blur-sm z-[999] w-full px-20 py-5 font-['Bebas Neue'] flex justify-between items-center`}
		>
			<div className="logo flex ">
				{/* Add your logo here */}
				<img src={logo} className="h-24" alt="" />
				
			</div>
			<div className="Links flex gap-10">
				{["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
					(item, index) => (
						<a
							key={index}
							className={`text-lg capitalize font-normal ${
								index === 4 && "ml-32"
							}`}
						>
							{item}
						</a>
					)
				)}
			</div>
		</div>
	);
}

export default Navbar;
