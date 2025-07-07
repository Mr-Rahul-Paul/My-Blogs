"use client";
import Svgs from "@/components/ui/svgs";
import { useTheme } from "@/components/layout/ThemeProvider";
const Hero = () => {
  const { theme } = useTheme();
  const border = theme === "light" ? "!border-black" : "!border-white";

  return (
    <>
      <section className="relative h-screen bg-cover bg-center max-w-full  z-10 overflow-hidden">
        {/* Background curved SVG for blur gradient effect */}
        <div className="absolute inset-0 w-full h-full blur-xs overflow-hidden">
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
                <stop offset="0%" stopColor="#FF9933" />
                <stop offset="33%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#138808" />
                <stop offset="66%" stopColor="#000080" />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,30 50,45 T100,40 L100,100 L0,100 Z"
              fill="url(#curveGradient)"
              opacity="0.3"
            />
          </svg>
        </div>
        <Svgs />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-sans font-bold text-[clamp(3rem,10vw,8rem)] leading-none">
              Paul&apos;s Blogs
            </h1>
            <h2 className="font-sans font-light text-[clamp(1.5rem,5vw,3rem)] leading-none mt-2">
              Where Code Meets Content
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg mt-8 max-w-2xl text-center">
                Tech, Art and More.
                <br />
                Explore in-depth tutorials, creative writing, and tech insights.
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              className={`${border} hover:backdrop-blur-xl border-2 rounded-2xl p-2 mt-4 z-30`}
            >
              See the blogs
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
