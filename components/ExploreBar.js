import React from "react";
import FakeData from "../fakeData.json";

const ExploreBar = () => {
  return (
    <div className="md:hidden flex items-center justify-start flex-col pt-2 pb-2 pr-10 pl-10 h-screen w-full sticky top-0">
      <input
        placeholder="web3 💪🏻"
        className="mb-10 w-full h-10 rounded-full py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500  focus:ring-1 sm:text-sm font-body "
      />

      <div className="flex flex-col items-left justify-start bg-slate-800 pt-12 pb-12 pr-12 pl-12 rounded-lg">
        <h1 className="text-white text-xl mb-8">What&apos;s Happening?</h1>

        <div className="font-body">
          {FakeData.map((data) => (
            <div className="mb-3" key={data.id}>
              <p className="text-slate-400">#{data.trend}</p>
              <h3 className="text-white text-lg">{data.title}</h3>
              <p className="text-cyan-700">Tweet : {data.tweet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreBar;
