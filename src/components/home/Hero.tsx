import Svgs from "@/components/ui/svgs";
const Hero = () => {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center max-w-full overflow-hidden">
        <Svgs />
        <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <div className="text-center z-10 px-4">
            <h1 className="font-sans font-bold text-[clamp(3rem,10vw,8rem)] leading-none">
              Paul&apos;s Blogs
            </h1>
            <h2 className="font-sans font-light text-[clamp(1.5rem,5vw,3rem)] leading-none mt-2">
              Where Code Meets Content
            </h2>
            <p className="text-lg mt-8 max-w-2xl">
              Dive into a world where technology meets creativity. Explore
              in-depth tutorials, creative writing, and tech insights.
            </p>
            <div className="mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
