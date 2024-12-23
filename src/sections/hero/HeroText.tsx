import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

gsap.registerPlugin(ScrollTrigger);

export default function HeroText() {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1
          className="font-semibold text-4xl md:text-9xl"
          style={{ fontSize: "306px" }}
        >
          MARK
        </h1>
        <div className="hidden xl:flex justify-center items-center space-x-4">
          <div className=" bg-white rounded-full text-center  flex items-center justify-center">
            {!clicked ? (
              <button
                onClick={() => isClicked(true)}
                className="z-10  p-10 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ▶️
              </button>
            ) : (
              <ReactPlayer
                width="620px"
                height="480px"
                playing
                loop={true}
                url="https://www.youtube.com/watch?v=QOUvmBggw_Y&list=RDN_dV7--eGFc&index=27"
              />
            )}
          </div>
          <div className="flex flex-col items-start">
            {clicked ? (
              <button onClick={() => isClicked(false)}>CLOSE</button>
            ) : (
              <button onClick={() => isClicked(true)}>WATCH</button>
            )}
            <h1>VIDEO INTRO</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center -mt-32">
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
