import React, { useState } from "react";
import { FaBars, FaTimes, FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40">
        <div>
          <span className="text-2xl font-bold">Brightmatter.io</span>
          <div
            className="w-4 h-4 bg-yellow-400 rounded-full
           "
          ></div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#home">home </a>
          <a href="#services"> services</a>
          <a href="#work"> our work</a>
          <a href="#contact">contact us</a>
        </div>

        <div className="md:hidden">
          <button className="px-6 py-2 bg-yellow-300 text-black font-semibold rounded-full cursor-pointer flex items-center gap-2">
            contact me 
            <FaLongArrowAltRight />
          </button>
        </div>

        <div >
          {
            showMenu?<FaTimes onClick={() => setShowMenu(!showMenu)} />: <FaBars onClick={()=>setShowMenu(!showMenu)}/>
          }
         
        </div>
      </div>
      

{
  showMenu && (
<div className="md:hidden flex flex-col items-center justify-center space-y-6 w-64 h-screen  bg-yellow-100">
           <a onClick={()=>setShowMenu(!showMenu)}  href="#home">home </a>
          <a onClick={()=>setShowMenu(!showMenu)} href="#services"> services</a>
          <a onClick={()=>setShowMenu(!showMenu)} href="#work"> our work</a>
          <a  href="#contact">contact us</a>

</div>
  )
}

    </div>
  );
};

export default Navbar;
