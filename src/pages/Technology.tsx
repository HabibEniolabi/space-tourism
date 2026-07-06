import { useState } from "react";
import { technologies } from "../data/spaceData";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTechnology = technologies[activeIndex];

  return (
    <section className="min-h-[calc(100svh-96px)] px-6 pb-10 pt-5 text-white md:min-h-[calc(100svh-96px)] md:px-10 md:pb-12 md:pt-7 lg:min-h-[calc(100svh-128px)] lg:pb-8 lg:pl-[clamp(4rem,8vw,120px)] lg:pr-0 lg:pt-5">
      <div className="flex min-h-[calc(100svh-96px)] w-full flex-col lg:min-h-[calc(100svh-128px)]">
        <h2 className="font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">03</span>
          Space launch 101
        </h2>

        <div className="grid flex-1 content-center gap-7 pt-8 md:gap-10 md:pt-10 lg:grid-cols-[80px_minmax(360px,520px)_minmax(360px,515px)] lg:items-center lg:gap-12 lg:pt-4 xl:grid-cols-[96px_minmax(420px,560px)_minmax(420px,515px)] xl:gap-16">
          {/* Image */}
          <div className="order-1 -mx-6 overflow-hidden md:-mx-10 lg:order-3 lg:mx-0 lg:justify-self-end lg:overflow-visible">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet={activeTechnology.landscapeImage}
              />

              <img
                src={activeTechnology.portraitImage}
                alt={activeTechnology.name}
                className="h-[170px] w-full object-cover sm:h-[210px] md:h-[260px] lg:h-[380px] lg:w-[360px] xl:h-[527px] xl:w-[515px]"
              />
            </picture>
          </div>

          {/* Number buttons */}
          <div className="order-2 flex items-center justify-center gap-4 lg:order-1 lg:flex-col lg:gap-6">
            {technologies.map((technology, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={technology.id}
                  type="button"
                  aria-label={`Show ${technology.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border font-bellefair text-base transition md:h-12 md:w-12 md:text-lg lg:h-16 lg:w-16 lg:text-2xl xl:h-20 xl:w-20 xl:text-[32px]",
                    isActive
                      ? "border-white bg-white text-[#0b0f1d]"
                      : "border-white/25 bg-transparent text-white hover:border-white",
                  ].join(" ")}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Text */}
          <div className="order-3 mx-auto max-w-[460px] text-center lg:order-2 lg:mx-0 lg:max-w-[520px] lg:text-left">
            <p className="mb-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] text-[#d0d6f9] md:text-base lg:text-[16px]">
              The terminology...
            </p>

            <h1 className="mb-4 font-bellefair text-[30px] uppercase leading-none text-white md:text-[44px] lg:text-[50px] xl:text-[56px]">
              {activeTechnology.name}
            </h1>

            <p className="mx-auto max-w-[430px] font-barlow text-[15px] leading-[1.75] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0 lg:max-w-[445px] lg:text-[18px] lg:leading-8">
              {activeTechnology.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;