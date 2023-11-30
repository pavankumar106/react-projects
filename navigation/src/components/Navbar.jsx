import React from "react";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-[100vw] h-[100vh] bg-black">
      <div className="flex justify-between h-[40px] shadow-lg p-[10px] text-white">
        <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 px-2 ">
          <h3>AZTEC</h3>
        </div>

        <ul className="flex gap-4 cursor-pointer ">
          <div className="group">
            <li>HOME</li>
            <div className="w-[100%] h-[2px] bg-white hidden group-hover:block duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <li>ABOUT</li>
            <div className="w-[100%] h-[2px] bg-white hidden group-hover:block duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <li>EXPLORE</li>
            <div className="w-[100%] h-[2px] bg-white hidden group-hover:block duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <li>SERVICES</li>
            <div className="w-[100%] h-[2px] bg-white hidden group-hover:block duration-500 ease-in-out"></div>
          </div>
          <div className="group">
            <li>CONTACT</li>
            <div className="w-[100%] h-[2px] bg-white hidden group-hover:block duration-500 ease-in-out"></div>
          </div>
        </ul>

        <div className="flex px-3 gap-2  ">
          <h5>USER</h5>
          <FaUserLarge />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
