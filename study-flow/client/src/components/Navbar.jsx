import React from "react";
import { FaBookReader } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-gray-300">
      <nav className="flex items-center justify-between py-6  gap-6 px-6 container mx-auto">
        <span>
          <FaBookReader />
        </span>

        <ul className="flex gap-6 ">
          <li>features</li>
           <li>how it works</li>
            <li>pricing</li>
             <li>FAQ</li>
        </ul>

        <div>
          <button className=" px-2 py-2">Login</button>
           <button className="bg-green-400 px-2 py-2"> Get started</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
