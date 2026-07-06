import { useEffect, useState } from "react";
import { crewMembers } from "../data/spaceData";

const AUTO_SLIDE_TIME = 5000;

const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCrew = crewMembers[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === crewMembers.length - 1 ? 0 : currentIndex + 1
      );
    }, AUTO_SLIDE_TIME);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-96px)] px-6 pb-0 pt-5 text-white md:min-h-[calc(100svh-96px)] md:px-10 md:pt-7 lg:min-h-[calc(100svh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:pt-5">
      <div className="mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-[1180px] flex-col lg:min-h-[calc(100svh-128px)]">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">02</span>
          Meet your crew
        </h2>

        <div className="grid flex-1 items-end gap-8 pt-10 md:pt-14 lg:grid-cols-[1fr_48%] lg:items-end lg:gap-10 lg:pt-10">
          <div className="relative z-30 flex flex-col items-center text-center lg:items-start lg:self-center lg:text-left">
            <p className="mb-2 font-bellefair text-base uppercase text-white/50 md:text-2xl lg:mb-4 lg:text-[32px]">
              {activeCrew.role}
            </p>

            <h1 className="mb-5 max-w-full font-bellefair text-[30px] uppercase leading-none text-white md:text-[52px] lg:mb-7 lg:text-[56px] xl:text-[64px]">
              {activeCrew.name}
            </h1>

            <p className="max-w-[460px] font-barlow text-[15px] leading-[1.75] text-[#d0d6f9] md:text-base md:leading-7 lg:max-w-[450px] lg:text-[18px] lg:leading-8">
              {activeCrew.bio}
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 md:mt-10 lg:mt-24 lg:justify-start">
              {crewMembers.map((member, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={member.id}
                    type="button"
                    aria-label={`Show ${member.name}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "h-3 w-3 rounded-full transition duration-300 md:h-4 md:w-4",
                      isActive
                        ? "bg-white"
                        : "bg-white/20 hover:bg-white/50",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex min-h-[300px] items-end justify-center md:min-h-[420px] lg:min-h-[520px] lg:justify-end">
            <div className="relative flex h-[300px] w-full max-w-[330px] items-end justify-center overflow-hidden md:h-[420px] md:max-w-[460px] lg:h-[520px] lg:max-w-[520px] xl:h-[560px] xl:max-w-[560px]">
              <img
                key={activeCrew.id}
                src={activeCrew.pngImage}
                alt={activeCrew.name}
                className="h-full w-auto object-contain object-bottom"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
                }}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0f1d]/80 via-[#0b0f1d]/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;