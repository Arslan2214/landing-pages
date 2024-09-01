import Image from "next/image";
import HeroSection from "./(sections)/HeroSection";
import Slider from "./(sections)/Slider";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between backdrop-blur-sm">
        
        <HeroSection />
        <Slider />
      </main>
    </>
  );
}
