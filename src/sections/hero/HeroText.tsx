import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroText() {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold" style={{ fontSize: "306px" }}>
          MARK
        </h1>
        <div className="flex justify-center items-center space-x-4">
          <div className="w-36  h-36 bg-white rounded-full text-center text-red-600 flex items-center justify-center">
            Video
          </div>
          <div className="flex flex-col">
            {clicked ? (
              <button onClick={() => isClicked(false)}>CLOSE</button>
            ) : (
              <button onClick={() => isClicked(true)}>WATCH</button>
            )}
            <h1>VIDEO INTRO</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center -mt-40">
        <div className="flex-1 text-gray-400  ">
          <p className="text-lg ">
            We help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers,
            and growing overall sales.
          </p>
        </div>
        <h1 className="font-semibold flex-1" style={{ fontSize: "306px" }}>
          EITING
        </h1>
      </div>
    </div>
  );
}
