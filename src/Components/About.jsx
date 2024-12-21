/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Img2 from '../assets/HowItWorks1.png'
import Img3 from '../assets/HowItWorks2.png'
import React from "react";
import './About.css'
function About() {

	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed=".05"
			className="w-full  text-black bg-[#CDEA68] -mt-24"
		>
			
			
			
			<div className="w-full flex gap-5 pt-[1.5vw] border-t-[1px] border-[#80943f] mt-20 mb-[-2vw]">
			<div id="university-selection" className="admissions-container">
                <div className="section-container ">
                    <div className="flex flex-col md:flex-row mt-4">
                        <div className="p-4 flex flex-wrap relative">
                            <img src={Img3} alt="" className="images p-2" />
                        </div>
                    </div>
                    <div className="text-section2 ">
                        <h2 className="section-title -ml-[2px] text-left text-3xl">Get invited
						Beyond just exclusive.</h2>
                        <p className="section-description text-xl">
                            Navigating the multitude of universities worldwide can be overwhelming. Admit Achievers simplifies this process with our University Selection service. We guide you in identifying the institutions that align with your academic interests, career aspirations, and personal preferences. Our advisors leverage their extensive knowledge of global universities to help you create a balanced list of target, match, and safety schools, maximizing your chances of acceptance.
                        </p>
                        
                    </div>
                </div>

                <div id="profile-evaluation" className="section-container">
                    <div className="text-section1">
                        <h2 className="section-title-left  text-left text-3xl">Profile Evaluation</h2>
                        <p className="section-description text-xl">
                            Admit Achievers' Profile Evaluation service offers a comprehensive assessment of your academic achievements, extracurricular activities, and personal goals. Our expert advisors analyze your unique strengths and areas for improvement, providing you with tailored feedback and actionable steps to enhance your profile. We ensure that you present your best self to your dream universities, giving you a competitive edge in the global applicant pool.
                        </p>
                        <button  className="custom-buttons-left bg-orange-500 text-white py-2 px-4 rounded mt-4">Book a Session</button>
                    </div>
                    <div className="flex flex-col md:flex-row mt-4">
                        <div className="p-4 flex flex-wrap relative">
                            <img src={Img2} alt="" className="images p-2" />
                        </div>
                    </div>
                </div>
            </div>
				
			</div>
		</div>
	);
}

export default About;
