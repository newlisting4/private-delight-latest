"use client";

import React from "react";
import Link from "next/link";

function Footer() {

  return (
    <>
      <footer className="bg-[#f5f5f5] py-10 px-6 md:px-12 border-t border-slate-200 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-14 gap-y-4 text-[#4f6df5] text-[16.8px] font-medium">
            <Link href="/contact" className="hover:underline text-center leading-tight">
              Contact <span className="block">PrivateDelights</span>
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <Link href="/" className="hover:underline">
              Locations
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-800 text-[16px] md:text-lg font-semibold mt-1 select-none">
            © 2026 PrivateDelights.ch
          </p>

        </div>
      </footer>

      {/* Floating HELP/FEEDBACK Button */}
      <div className="fixed bottom-[20%] right-5 z-50">
        <button className="bg-[#4f6df5] hover:bg-blue-600 text-white text-[13px] font-semibold px-4 py-2.5 uppercase tracking-wider rounded-[3px] shadow-[0_3px_5px_0_rgba(0,0,0,0.3)] transition-colors duration-200">
          HELP/FEEDBACK
        </button>
      </div>
    </>
  );
}

export default Footer;
