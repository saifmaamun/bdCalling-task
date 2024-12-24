import first from "../../assets/work/1.png";

const Why3 = () => {
  return (
    <div className="flex justify-center space-x-40 items-center w-screen  px-20 text-white ">
      <div className="flex justify-around items-center flex-col gap-y-40">
        <div className="flex justify-around items-center gap-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-8xl">25k</h1>
            <p className="text-lg text-slate-400">
              Project <br /> Completed
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-8xl">8k</h1>
            <p className="text-lg text-slate-400">
              Happy <br /> Customer
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-20">
          <div className="flex flex-col gap-6 pe-10">
            <h1 className="text-8xl">15</h1>
            <p className="text-lg text-slate-400">
              Years <br /> Experence
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-8xl">19</h1>
            <p className="text-lg text-slate-400">
              Awards <br /> Achievment
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={first} alt="" />
      </div>
    </div>
  );
};

export default Why3;
