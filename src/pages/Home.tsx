import React from "react";

const Home = () => {
  return (
    <section className="h-[calc(100dvh-96px)] overflow-hidden px-6 py-8 text-white md:h-[calc(100dvh-96px)] md:px-10 md:py-12 lg:h-[calc(100dvh-128px)] lg:px-[clamp(5rem,10vw,154px)] lg:py-10">
      <div className="mx-auto flex h-full w-full max-w-[1080px] flex-col items-center justify-center gap-12 text-center lg:flex-row lg:justify-between lg:gap-20 lg:text-left">
        <div className="max-w-[540px]">
          <p className="mb-4 font-barlow-condensed text-base uppercase tracking-[2.7px] text-[#d0d6f9] md:mb-5 md:text-[22px] md:tracking-[4px] lg:text-[26px] lg:tracking-[4.7px]">
            So, you want to travel to
          </p>

          <h1 className="mb-5 font-bellefair text-[80px] font-normal uppercase leading-none text-white md:text-[130px] lg:text-[140px] xl:text-[150px]">
            Space
          </h1>

          <p className="mx-auto max-w-[540px] font-barlow text-[15px] leading-[1.65] text-[#d0d6f9] md:max-w-[590px] md:text-lg md:leading-[1.75] lg:mx-0 lg:max-w-[520px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flex shrink-0 justify-center lg:pr-[clamp(0rem,4vw,70px)]">
          <button className="h-[140px] w-[140px] rounded-full bg-white font-bellefair text-lg uppercase tracking-[2px] text-[#11131f] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_52px_rgba(255,255,255,0.12)] md:h-[220px] md:w-[220px] md:text-[30px] md:hover:shadow-[0_0_0_72px_rgba(255,255,255,0.12)] lg:h-[240px] lg:w-[240px] xl:h-[250px] xl:w-[250px] xl:text-[32px]">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
