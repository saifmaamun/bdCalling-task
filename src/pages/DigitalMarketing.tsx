import Clients from "@/sections/clients/Clients";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/sections/footer/Footer";
import Hero from "@/sections/hero/Hero";
import Services from "@/sections/services/Services";
import Work from "@/sections/work/Work";
import Counter from "@/sections/counter/Counter";

export default function DigitalMarketing() {
  return (
    <main className="relative bg-[#101010] text-white overflow-hidden font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Counter />
      <Clients />
      <Footer />
    </main>
  );
}
