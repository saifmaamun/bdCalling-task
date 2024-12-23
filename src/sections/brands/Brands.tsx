import brandLogo from "../../assets/hero/logo.png";
const Brands = () => {
  return (
    <div>
      <h1 className="uppercase text-center">
        We worked with global largest brands
      </h1>

      <div className="container my-20 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <img className="w-24 mx-auto" src={brandLogo} alt="Brand Logo" />
        <img className="w-24 mx-auto" src={brandLogo} alt="Brand Logo" />
        <img className="w-24 mx-auto" src={brandLogo} alt="Brand Logo" />
        <img className="w-24 mx-auto" src={brandLogo} alt="Brand Logo" />
        <img className="w-24 mx-auto" src={brandLogo} alt="Brand Logo" />
        <img className="w-24 mx-auto" src={brandLogo} alt="Brand Logo" />
      </div>
    </div>
  );
};

export default Brands;
