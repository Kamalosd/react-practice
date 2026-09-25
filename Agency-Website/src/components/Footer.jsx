import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-20 bg-amber-200">
      <div className="mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="mb-4 ">
            <span className="text-2xl font-semibold">Brightnatter.io</span>
            <div className="rounded-full bg-yellow-500 w-4 h-4"></div>
            <p className="mb-4">looking for new business opportunity </p>
            <div className=" flex items-center gap-6 py-2 font-semibold">
              <a href="home">home</a>
              <a href="service">service</a>
              <a href="contact">contact us</a>
              <a href="work">our work</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              subscribe to our newsletters
            </h3>
            <p className="text-sm ">
              the latest news, articles sent to your inbox weekly.
            </p>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-2 items-start">
              <input
                className="w-full px-6 py-3  border border-black outline-none rounded"
                placeholder="enter your email "
                type="email"
              />
              <button className="px-6 py-3 bg-yellow-500 rounded  font-semibold cursor-pointer ">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t py-4 flex flex-col md:flex-row gap-6 justify-between items-start">
          <p>copywright 2025 Theabhisekhscodes - All Right Reserved.</p>

          <div className="flex items-center gap-4 text-xl text-yellow-500 ">
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaGoogle className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
