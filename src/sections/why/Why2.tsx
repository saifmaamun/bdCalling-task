const Why2 = () => {
  return (
    <div className="hidden xl:flex justify-around items-center w-screen  px-20 text-white ">
      <div className="left">
        <h1 className="uppercase text-lg mb-20">
          Why
          <br />
          Choose Us
        </h1>
        <h1 className="uppercase text-6xl font-medium mb-20">
          Keword,Research <br /> Strategy, Survey, <br />& Analytics
        </h1>
        <p className="text-lg ps-20 mb-20">
          Attention, we take out our round glasses and <br /> our sweater with
          elbow patches to go back <br /> to the origins of the user experience:
          the first <br /> mention of the user and its importance was <br />{" "}
          born in the
        </p>
        <div className="flex justify-start items-center ps-20">
          <button className="uppercase border rounded-full text-sm px-3 py-1">
            Google
          </button>
          <button className="uppercase border rounded-full text-sm px-3 py-1">
            pinterest
          </button>
          <button className="uppercase border rounded-full text-sm px-3 py-1">
            instegram
          </button>
        </div>
      </div>
      <div className="right ">
        <div className="flex justify-end items-center  gap-8">
          <div className=" mt-12 border-2  text-base text-white rounded-full w-52 h-52 flex items-center justify-center">
            <h1 className="text-5xl">60%</h1>
          </div>
          <div>
            <h1 className="text-2xl uppercase mb-6">Strategy</h1>
            <p className="text-base">
              Your marketing strategy optimizing <br />
              performances doesn’t have to be a <br /> guessing game.
            </p>
          </div>
        </div>
        <div className="flex -ms-32 justify-start items-center  gap-8">
          <div className=" mt-12 border-2  text-base text-white rounded-full w-52 h-52 flex items-center justify-center">
            <h1 className="text-5xl">95%</h1>
          </div>
          <div>
            <h1 className="text-2xl uppercase mb-6">audience</h1>
            <p className="text-base">
              Your marketing strategy optimizing <br />
              performances doesn’t have to be a <br /> guessing game.
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center  gap-8">
          <div className=" mt-12 border-2  text-base text-white rounded-full w-52 h-52 flex items-center justify-center">
            <h1 className="text-5xl">70%</h1>
          </div>
          <div>
            <h1 className="text-2xl uppercase mb-6">keyword</h1>
            <p className="text-base">
              Your marketing strategy optimizing <br />
              performances doesn’t have to be a <br /> guessing game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why2;
