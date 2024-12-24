import Clients from "@/sections/clients/Clients";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/sections/footer/Footer";
import Hero from "@/sections/hero/Hero";
import Services from "@/sections/services/Services";
import Work from "@/sections/work/Work";
import Counter from "@/sections/counter/Counter";
import Brands from "@/sections/brands/Brands";
import About from "@/sections/about/About";
import Why from "@/sections/why/Why";
import Pricing from "@/sections/pricing/Pricing";
export default function DigitalMarketing() {
  return (
    <main className=" bg-[#101010] text-white  font-sans">
      <Navbar />
      <Hero />
      <Brands />
      <About />
      {/* <Services />
      <Work />
      <Why />
      <Pricing />
      <Counter />
      <Clients />
      <Footer /> */}
    </main>
  );
}
