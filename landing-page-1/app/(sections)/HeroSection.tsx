import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="glassy min-h-screen w-full">
      <div className="cont-block flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Website</h1>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor id consectetur feugiat, nunc arcu laoreet justo, at gravida enim neque non neque.</p>
          <Link href="#" className="text-white font-bold py-3 px-8 rounded-md bg-pri">Learn More</Link>
        </div>
        <div className="min-h-[550px]"><Image width={350} height={450} layout="flexible" objectFit="cover" src="/banner_image_2.png" alt="banner_image" /></div>
      </div>
    </section>
  );
};

export default HeroSection;
