// import { Header } from "@/components/common/header";
"use client"
import Button from "@/components/customUi/Custom-Button";
import { DemoSection } from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import { HowItsWork } from "@/components/home/how-its-work";
import { Overview } from "@/components/home/quick-overview";

import { ModeToggle } from "@/components/ui/mode.toggle";



export default function Home() {
  return (
    <div className="relative p-0 w-full">
      {/* <div className=" h-screen bg-[url('/bgGradient.avif')] bg-cover bg-center"> */}
      {/* </div> */}

      
      <HeroSection/>
      <DemoSection/>
      <Overview/>
      <HowItsWork/>
    </div>
  );
}
