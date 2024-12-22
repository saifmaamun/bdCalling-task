import type { ClientLogo } from "@/types";

export default function ClientLogo({ src, alt }: ClientLogo) {
  return (
    <div className="w-[120px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}
