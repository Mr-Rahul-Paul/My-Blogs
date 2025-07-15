import React from "react";
import Image from "next/image";

function page() {
  return (
    <section className="relative min-h-screen bg-cover bg-center max-w-full  z-10 overflow-hidden">
      <div className="mt-20  gap-8   grid-cols-2 flex items-center justify-center">
        <div className="text-4xl font-bold max-w-lg">
          <h1>Blogs</h1>
          <p className="text-lg mt-2 text-gray-700">
            Welcome to my blog space! I&apos;m excited to share my
            insightsI&apos;ve learned so far. Here you&apos;ll find posts about
            my academic experiences, projects I&apos;ve worked on, and tips that
            helped me along the way.
          </p>
        </div>
        <div
          className="rounded-full p-[5px] border-[5px] border-white/85"
          // wrap in a div and added hover animation
        >
          <Image
            src="/profile.png"
            alt="Profile"
            height={200}
            width={200}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
          {/* 
            The original code uses `translate-x-[200px]` to move the line, 
            but this is not universal and will not center the line on all screens.
            What's wrong: The line will always be shifted 200px to the right, which is not responsive or centered.
            What is happening: The line may appear off-center on different screen sizes.
            Ways to fix: 
              - Use flexbox or grid to center the line horizontally.
              - Remove the translate-x and use mx-auto to center the div.
          */}
          <div className="my-6 border-b-2 border-gray-700 max-w-2xl w-full mx-auto"></div>
    </section>
  );
}

export default page;
