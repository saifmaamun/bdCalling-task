import { useInView } from "react-intersection-observer";
import type { CountItem as CountItemType } from "@/types";
import CountItem from "./CountItem";

const stats: CountItemType[] = [
  { number: 150, label: "Projects Completed" },
  { number: 80, label: "Happy Clients" },
  { number: 10, label: "Years Experience" },
  { number: 200, label: "Digital Products" },
];

export default function Counter() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <CountItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
