import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { CgCoffee } from "react-icons/cg";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer gap-2">
          <span>
            <CgCoffee size={25} />
          </span>
          <h1 className="text-xl font-semibold">cafePulse</h1>
        </div>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            className="group relative inline-block hover:text-brightColor cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="group relative inline-block hover:text-brightColor cursor-pointer"
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="group relative inline-block hover:text-brightColor cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="group relative inline-block hover:text-brightColor cursor-pointer"
            to="products"
            spy={true}
            smooth={true}
            duration={500}
          >
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="group relative inline-block hover:text-brightColor cursor-pointer"
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
          >
            Reviews
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
        </nav>
        <div className="hidden lg:flex">
          <Button title="login" />
        </div>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-gray-600 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          className="group relative inline-block hover:text-brightColor cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Home
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          className="group relative inline-block hover:text-brightColor cursor-pointer"
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Menu
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          className="group relative inline-block hover:text-brightColor cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          About
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          className="group relative inline-block hover:text-brightColor cursor-pointer"
          to="products"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Products
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          className="group relative inline-block hover:text-brightColor cursor-pointer"
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Reviews
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Button title="login" onClick={closeMenu} />
      </div>
    </div>
  );
};

export default Navbar;
