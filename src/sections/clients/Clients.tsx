import Marquee from "react-fast-marquee";

import type { ClientLogo as ClientLogoType } from "@/types";
import ClientLogo from "./ClientLogo";

const logos: ClientLogoType[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=60&width=120`,
  alt: `Client ${i + 1}`,
}));

export default function Clients() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-heading">
          Our Clients
        </h2>
      </div>

      <Marquee gradient={false} speed={50}>
        <div className="flex gap-12 py-8">
          {logos.map((logo) => (
            <ClientLogo key={logo.id} {...logo} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
