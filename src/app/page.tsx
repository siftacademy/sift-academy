import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Pricing } from "@/components/sections/Pricing";

export default function HomePage() {
  return (
    // <main>
    //   <Navbar />
    //   <Hero />

    // </main>
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <About/>
        <Benefits/>
        <Pricing/>
        <FAQ/>
        <CTA/>
      </main>
      <Footer/>
    </>
  );
}
