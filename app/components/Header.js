"use client";

import React from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Header({ view, setView }) {
  return (
    <div className="px-[15px] lg:px-[25px] py-[16px] shadow-custom-bottom text-[#4f6df5] flex justify-between items-center bg-white">
      <div 
        onClick={() => setView && setView("home")}
        className="cursor-pointer select-none"
      >
        <h1 className="text-2xl font-bold italic tracking-wide">
          PrivateDelights
        </h1>
      </div>

      <div className="flex justify-between items-center gap-[17px] text-gray-700">
        <div 
          onClick={() => setView && setView("home")}
          className={`flex items-center gap-1.5 cursor-pointer hover:text-[#4f6df5] transition-colors ${
            view === "home" ? "text-[#4f6df5]" : ""
          }`}
        >
          <span className="text-xl opacity-75">
            <MdLocationOn />
          </span>
          <p className="hidden md:block text-[14.5px] font-medium">Locations</p>
        </div>
        <div 
          onClick={() => setView && setView("home")}
          className={`flex items-center gap-1.5 cursor-pointer hover:text-[#4f6df5] transition-colors ${
            view === "home" ? "text-[#4f6df5]" : ""
          }`}
        >
          <span className="text-xl opacity-75">
            <MdSearch />
          </span>
          <p className="hidden md:block text-[14.5px] font-medium">Search</p>
        </div>
        <div 
          onClick={() => setView && setView("login")}
          className={`flex items-center gap-1.5 cursor-pointer hover:text-[#4f6df5] transition-colors ${
            view === "login" ? "text-[#4f6df5] font-semibold" : ""
          }`}
        >
          <span className="text-lg opacity-75">
            <FaUserCircle />
          </span>
          <p className="hidden md:block text-[14.5px] font-medium">Login</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
