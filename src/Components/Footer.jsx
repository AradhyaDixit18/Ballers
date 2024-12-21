import React from "react";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="bg-white text-black w-full px-6 ">
      <div className="flex justify-between items-center flex-wrap">
        
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Ballers Logo"
            className="w-12 h-12"
          />
          <span className="text-2xl font-bold">BALLERS</span>
        </div>

      
        <div className="flex items-center space-x-8 text-lg font-medium">
          <a href="#faqs" className="hover:underline">
            FAQs
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
         
        </div>
      </div>

      {/* Address and Footer Text */}
      <div className="border-t border-black mt-4 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>14/4, J Block, 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu, 600102</p>
        <p className="text-center mt-2 md:mt-0">
          © 2024 Ballers · All Rights Reserved ·{" "}
          <a href="#terms" className="hover:underline">
            Terms and Conditions
          </a>{" "}
          ·{" "}
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
