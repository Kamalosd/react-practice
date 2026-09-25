import React from "react";
import {
  FaApple,
  FaFacebook,
  FaGoogle,
  FaGoogleDrive,
  FaInstagram,
  FaLinkedin,
  FaMicrosoft,
  FaTwitter,
} from "react-icons/fa";

const Company = () => {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto px-6">
        <p className="text-2xl md:text-3xl mb-16 text-center">
          {" "}
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaMicrosoft className="w-10 h-10 text-amber-400" />
          </div>

          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaFacebook className="w-10 h-10 text-amber-400" />
          </div>

          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaLinkedin className="w-10 h-10 text-amber-400" />
          </div>

          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaApple className="w-10 h-10 text-amber-400" />
          </div>

          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaInstagram className="w-10 h-10 text-amber-400" />
          </div>

          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaGoogle className="w-10 h-10 text-amber-400" />
          </div>

          <div className="w-20 h-20 rounded-full border border-amber-400 flex items-center justify-center hover:scale-105 duration-200 transition cursor-pointer">
            <FaGoogleDrive className="w-10 h-10 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
