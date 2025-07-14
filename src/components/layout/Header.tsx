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
        >
          <Image
            className="rounded-full object-cover border-2"
            src="/profile.png"
            alt="profile"
            width={40}
            height={40}
          />
          <button
            onClick={toggleTheme}
            className="z-30 hover:cursor-pointer rounded-full    p-1"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
