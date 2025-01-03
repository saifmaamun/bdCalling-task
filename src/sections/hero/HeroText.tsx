import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

export default function HeroText() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const letterVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.25 },
    }),
  };
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <div ref={ref} className="flex justify-between items-center">
        <motion.div
          viewport={{ once: true }}
          className="flex flex-wrap justify-center font-bold"
          initial="hidden"
          animate={controls}
        >
          {"MARK".split("").map((letter, index) => (
            <motion.h1
              viewport={{ once: true }}
              key={index}
              custom={index}
              variants={letterVariants}
              className="font-semibold  text-8xl xl:text-[306px] lg:text-[250px] md:text-9xl"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.h1>
          ))}
        </motion.div>

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
                width="1920px"
                height="1080px"
                playing
                muted
                loop={true}
                url="https://www.youtube.com/watch?v=xt5PBqw7XXg"
                style={{
                  position: "fixed",
                  top: "0",
                  left: "0",

                  zIndex: "-100",
                }}
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
      <div className="flex flex-col md:flex-row justify-end items-center  ">
        <div className=" flex-1 md:order-1 order-2 text-gray-400  ">
          <p className="text-lg ">
            We help ambitious businesses like yours generate more profits by
            building awareness, driving web traffic, connecting with customers,
            and growing overall sales.
          </p>
        </div>
        <motion.div
          viewport={{ once: true }}
          className="flex order-1 flex-wrap justify-center font-bold"
          initial="hidden"
          animate={controls}
        >
          {"EITING".split("").map((letter, index) => (
            <motion.h1
              viewport={{ once: true }}
              key={index}
              custom={index}
              variants={letterVariants}
              className="font-semibold  flex-1 text-8xl xl:text-[306px] lg:text-[250px] md:text-9xl"
              // style={{ fontSize: "306px" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
