import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo-white.png";

const FooterTop = () => {
  //

  //
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
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
        <div className="text-center uppercase border border-gray-700 lg:border-t-0 bg-black text-white hover:bg-white hover:text-black  text-sm  w-screen lg:w-44 py-10  ">
          facebook
        </div>
        <div className="text-center uppercase border border-gray-700  bg-black text-white hover:bg-white hover:text-black  text-sm w-screen lg:w-44 py-10  ">
          twitter
        </div>
        <div className="text-center uppercase border border-gray-700 bg-black text-white hover:bg-white hover:text-black  text-sm w-screen lg:w-44 py-10  ">
          instagram
        </div>
        <div className="text-center uppercase border border-gray-700 border-b-0 bg-black text-white hover:bg-white hover:text-black  text-sm w-screen lg:w-44 py-10 ">
          linkedin
        </div>
      </div>
      <div className="w-8/12">
        <h1 className="xl:text-9xl lg:text-6xl md:text-3xl text-2xl  text-right px-8">
          LET'S TALK
        </h1>
      </div>
    </div>
  );
};

export default FooterTop;
