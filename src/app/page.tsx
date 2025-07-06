import Hero from "@/components/home/Hero";
import WhatsAhead from "@/components/home/WhatsAhead";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <WhatsAhead />
    </div>
  );
}