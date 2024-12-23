import about from "../../assets/about/about.png";

const About = () => {
  return (
    <div className="bg-dark text-white py-20 container flex justify-center uppercase items-center">
      <div className="md:flex-col md:flex-1 flex-row">
        <img className="" src={about} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg">Who We Are</h1>
        <h1 className="text-6xl font-medium">
          We are leading digital marketing agency.
        </h1>
        <div className=" my-10 ms-48 ps-8 border-s-2">
          <p className="text-gray-400 ">
            We’re a team of strategic mdigital marketing working globally with
            largest brands, We believe that progress only happens when you
            refused to play things safe. We combine ideas and behaviors, and
            insights with design, technological data to produce brand
            experiences that customers love our services.
          </p>
          <button className=" mt-12 bg-white text-black rounded-full w-32 h-32 flex items-center justify-center">
            Explore Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
