"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-5">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className={`text-lg font-bold ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Paul&apos;s Blogs
          </Link>
        </div>
        <nav className="hidden sm:flex items-center space-x-8">
          <Link
            href="/blogs"
            className={`relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
              theme === "light"
                ? "text-black after:bg-black hover:text-black"
                : "text-white after:bg-white hover:text-white"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className={`relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
              theme === "light"
                ? "text-black after:bg-black hover:text-black"
                : "text-white after:bg-white hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
              theme === "light"
                ? "text-black after:bg-black hover:text-black"
                : "text-white after:bg-white hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>
        <div
          className={` flex items-center space-x-4 rounded-full   ${
            theme === "light" ? "border-black" : "border-white"
          }`}
        ><a href="https://x.com/_Rahul_Paul" target="_blank">
          <Image
            className="rounded-full object-cover border-2"
            src="/profile.png"
            alt="profile"
            width={40}
            height={40}
            />
            </a>
          <button
            onClick={toggleTheme}
            className="z-30 hover:cursor-pointer rounded-full p-1 "
          >
            {theme === "light" ? (
              //  moon icon
              <div className="rounded-full border-black">

              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Moon icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
              </div>
            ) : (
              //sun icon
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 p-1  rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Sun icon */}
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} fill="none"/>
                <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              </div>
            )}
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
