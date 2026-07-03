import React from "react";

const Home = () => {
  return (
    <section className="relative z-10 grid min-h-[calc(100vh-128px)] grid-cols-2 items-end px-[clamp(6rem,10vw,154px)] pb-[110px] max-lg:min-h-[calc(100vh-96px)] max-lg:grid-cols-1 max-lg:items-start max-lg:px-10 max-lg:pb-20 max-lg:pt-28 max-lg:text-center max-md:px-6 max-md:pb-16 max-md:pt-8">
      <div className="max-w-[540px] max-lg:mx-auto">
        <p className="mb-6 font-barlow-condensed text-[28px] uppercase tracking-[4.7px] text-[#d0d6f9] max-lg:text-[22px] max-lg:tracking-[4px] max-md:mb-4 max-md:text-base max-md:tracking-[2.7px]">
          So, you want to travel to
        </p>

        <h1 className="mb-8 font-bellefair text-[150px] font-normal uppercase leading-none text-white max-lg:text-[150px] max-md:mb-6 max-md:text-[80px]">
          Space
        </h1>

        <p className="max-w-[540px] font-barlow text-lg leading-[1.75] text-[#d0d6f9] max-lg:mx-auto max-lg:max-w-[590px] max-md:text-[15px] max-md:leading-[1.65]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex justify-center pb-10 max-lg:mt-16 max-lg:pb-0 max-md:mt-28">
        <button className="h-[250px] w-[250px] rounded-full bg-white font-bellefair text-[32px] uppercase tracking-[2px] text-[#11131f] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_88px_rgba(255,255,255,0.12)] max-lg:h-[242px] max-lg:w-[242px] max-md:h-[150px] max-md:w-[150px] max-md:text-lg">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Home;
