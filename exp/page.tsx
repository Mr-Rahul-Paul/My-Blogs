import Svgs from "../src/components/ui/svgs";

export default function Home() {
  return (
    <>
      <section className="h-screen ">
        <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#f7f6f3] overflow-hidden">
          {/* Top Center Site Name */}
          <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
            <a href="https://profile-website-psi.vercel.app" target="_blank">
              <span className="text-xs tracking-widest text-black/70 font-light ">
                My profile Website
              </span>
            </a>
          </div>

          {/* Main Headline */}
          <div className="text-center z-10 px-4">
            <h1 className="font-sans font-light text-[clamp(2.5rem,8vw,5rem)] leading-none text-black">
              Paul&apos;s Blogs
            </h1>
            <h2 className="font-sans font-bold text-[clamp(3rem,8vw,6rem)] leading-none text-black mt-2">
              Where Code Meets Content
            </h2>
          </div>

          {/* Subtitle */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
            <span className="text-xs text-black/70 font-light tracking-wide text-center max-w-xl">
              Where technology meets creativity through code and writing
            </span>
          </div>

          {/* SVG Starburst Shapes */}
          <Svgs />
        </main>
      </section>
      <section className="h-screen ">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">Hello World</h1>
        </div>
      </section>
    </>
  );
}
