import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo-white.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FooterTop = () => {
  //
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.children;
    const tl = gsap.timeline({ repeat: -1 });

    Array.from(letters).forEach((letter, index) => {
      tl.to(letter, {
        y: -20,
        duration: 0.2,
        ease: "power2.out",
        color: "white",
        delay: index * 0.1,
      })
        .to(letter, {
          y: 0,
          duration: 0.2,
          ease: "bounce.out",
        })
        .to(letter, {
          duration: 0.5,
          background: "linear-gradient(to right, #ff00ff, #00ffff)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })
        .to(letter, {
          duration: 0.5,
          color: "#ff00ff",
          background: "none",
          WebkitTextFillColor: "initial",
        })
        .to(letter, {
          duration: 0.5,
          color: "white",
        });
    });

    tl.to({}, { duration: 3 }); // 3 second pause before repeating

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="flex justify-between items-center">
      <div className="basis-3/12 flex flex-col justify-start gap-y-8">
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
        <p className="text-base text-slate-400 ">
          When do they work well, and when do they <br /> on us and finally,
          when do we actually need <br /> how can we avoid them.
        </p>
      </div>
      <div className="1/12">
        <div>
          <button className="uppercase border border-gray-700 border-t-0 bg-black text-white hover:bg-white hover:text-black  text-sm  w-44 py-10  ">
            facebook
          </button>
        </div>
        <div>
          <button className="uppercase border border-gray-700  bg-black text-white hover:bg-white hover:text-black  text-sm w-44 py-10  ">
            twitter
          </button>
        </div>
        <div>
          <button className="uppercase border border-gray-700 bg-black text-white hover:bg-white hover:text-black  text-sm w-44 py-10  ">
            instagram
          </button>
        </div>
        <div>
          <button className="uppercase border border-gray-700 border-b-0 bg-black text-white hover:bg-white hover:text-black  text-sm w-44 py-10 ">
            linkedin
          </button>
        </div>
      </div>
      <div className="w-8/12">
        {/* <h1 className="text-9xl  text-right px-8">LET'S TALK</h1> */}
        <div ref={textRef} className="text-4xl font-bold tracking-wider">
          {"LETS TALK".split("").map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
