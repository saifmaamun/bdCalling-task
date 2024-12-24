import { CardsProps } from "@/types";

const Cards: React.FC<CardsProps> = ({ card }) => {
  return (
    <div className="group relative h-screen w-screen overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: card.url,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-black p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Cards;
