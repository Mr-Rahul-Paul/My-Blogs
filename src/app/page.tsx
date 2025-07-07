import Hero from "@/components/home/Hero";

import BlogsSection from "@/components/home/BlogsSection";

export default function Home() {
  return (
    <div className="w-full overflow-clip">
      <Hero />
      <BlogsSection />
    </div>
  );
}
