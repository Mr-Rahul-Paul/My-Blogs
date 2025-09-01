"use client";
import Svgs from "@/components/ui/svgs";
import { useTheme } from "@/components/layout/ThemeProvider";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const Hero = () => {
  const { theme } = useTheme();
  const border = theme === "light" ? "!border-black" : "!border-white";

  // Framer Motion variants for a staggered word-by-word reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  } satisfies Variants;

  // Parent sequence so sections (title → subtitle → paragraph → button) reveal in order
  const sequenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.05 }
    }
  } satisfies Variants;

  const wordVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 50 }
    }
  } satisfies Variants;

  const titleWords = "Paul's Blogs".split(" ");
  const subtitleWords = "Where Code Meets Content".split(" ");
  const line1Words = "Tech and Art.".split("  ");
  const line2Words = "Explore in-depth tutorials, creative writing, and tech insights.".split("  ");

  const scrollToBlogs = () => {
    const blogsSection = document.getElementById('blogs-section');
    if (blogsSection) {
      blogsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section className="relative h-screen bg-cover bg-center max-w-full  z-10 overflow-hidden">
        {/* Background curved SVG for blur gradient effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
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
          <motion.div className="text-center px-4" variants={sequenceVariants} initial="hidden" animate="visible">
            <motion.h1
              variants={containerVariants}
              className="font-sans font-bold text-[clamp(3rem,10vw,8rem)] leading-none tracking-tight"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.4ch]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              variants={containerVariants}
              className="font-sans font-bold text-[clamp(1.5rem,5vw,3rem)] leading-none tracking-tight mt-8"
            >
              {subtitleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.4ch]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div variants={containerVariants} className="flex flex-col items-center justify-center font-semibold text-lg">
              <motion.p
                variants={containerVariants}
                className="mt-8 max-w-2xl text-center"
              >
                {line1Words.map((word, index) => (
                  <motion.span
                    key={`l1-${index}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.4ch]"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {line2Words.map((word, index) => (
                  <motion.span
                    key={`l2-${index}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.4ch]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <motion.div variants={containerVariants} className="flex justify-center ">
              <motion.button
                onClick={scrollToBlogs}
                variants={wordVariants}
                className={`${border} hover:backdrop-blur-lg hover:cursor-pointer hover:shadow-xl hover:shadow-blur-lg hover:shadow-white/60 border-2 rounded-xl p-2 mt-4 font-semibold z-30`}
              >
                See the blogs
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Hero;
