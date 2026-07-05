import { useState } from "react";
import { technologies } from "../data/spaceData";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTechnology = technologies[activeIndex];

  return (
    <section className="relative h-[calc(100dvh-96px)] overflow-hidden px-6 py-5 text-white md:h-[calc(100dvh-96px)] md:px-10 md:py-7 lg:h-[calc(100dvh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:py-5">
      <div className="mx-auto flex h-full w-full max-w-[1080px] flex-col">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">03</span>
          Space launch 101
        </h2>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 md:gap-8 lg:flex-row lg:justify-between lg:gap-14">
          {/* Image: first on tablet/mobile, right side on desktop */}
          <div className="relative z-10 order-1 w-[calc(100%+48px)] overflow-hidden md:w-[calc(100%+80px)] lg:order-3 lg:w-auto lg:overflow-visible">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet={activeTechnology.landscapeImage}
              />

              <img
                src={activeTechnology.portraitImage}
                alt={activeTechnology.name}
                className="h-[170px] w-full object-cover md:h-[260px] lg:h-[350px] lg:w-[330px] lg:object-cover xl:h-[380px] xl:w-[360px]"
              />
            </picture>
          </div>

          {/* Text and controls */}
          <div className="relative z-30 order-2 flex w-full flex-col items-center gap-6 text-center lg:order-2 lg:flex-row lg:items-center lg:gap-8 lg:text-left">
            {/* Number buttons */}
            <div className="flex items-center gap-4 lg:flex-col lg:gap-5">
              {technologies.map((technology, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={technology.id}
                    type="button"
                    aria-label={`Show ${technology.name}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "flex h-10 w-10 items-center justify-center cursor-pointer rounded-full border font-bellefair text-base transition md:h-12 md:w-12 md:text-lg lg:h-14 lg:w-14 lg:text-xl",
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

            {/* Content */}
            <div className="max-w-[430px]">
              <p className="mb-2 font-bellefair text-base uppercase text-white/50 md:text-xl lg:text-[22px]">
                The terminology...
              </p>

              <h1 className="mb-4 font-bellefair text-[30px] uppercase leading-none text-white md:text-[42px] lg:text-[46px] xl:text-[50px]">
                {activeTechnology.name}
              </h1>

              <p className="mx-auto max-w-[430px] font-barlow text-[15px] leading-[1.75] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0 lg:max-w-[390px]">
                {activeTechnology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;