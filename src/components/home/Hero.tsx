"use client";
import Svgs from "@/components/ui/svgs";
import { useState } from "react";

const Hero = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <>
      <section className="relative h-screen bg-cover bg-center max-w-full overflow-hidden">
        {/* Background curved SVG for blur gradient effect */}
        <div className="absolute inset-0 w-full h-full blur-lg">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "blur(8px)" }}
          >
            <defs>
              <linearGradient
                id="curveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="25%" stopColor="#764ba2" />
                <stop offset="50%" stopColor="#f093fb" />
                <stop offset="75%" stopColor="#f5576c" />
                <stop offset="100%" stopColor="#4facfe" />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,30 50,45 T100,40 L100,100 L0,100 Z"
              fill="url(#curveGradient)"
              opacity="0.3"
            />
          </svg>
        </div>
        <Svgs theme={theme} />
        <div
          className={`h-full flex flex-col items-center justify-center ${
            theme === "Light"
              ? "bg-[#f7f6f3] text-black"
              : "bg-black text-white"
          }`}
        >
          <button onClick={toggleTheme} className="border-white z-30">
            {theme === "light" ? "dsd🌙" : "☀️"}
          </button>
          <div className="text-center px-4">
            <h1 className="font-sans font-bold text-[clamp(3rem,10vw,8rem)] leading-none">
              Paul&apos;s Blogs
            </h1>
            <h2 className="font-sans font-light text-[clamp(1.5rem,5vw,3rem)] leading-none mt-2">
              Where Code Meets Content
            </h2>
            <p className="text-lg mt-8 max-w-2xl text-center">
              Tech, Art and More.
              <br />
              Explore in-depth tutorials, creative writing, and tech insights.
            </p>
            <div className="mt-6 bg-red-400"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
