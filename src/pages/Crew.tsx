import { useEffect, useState } from "react";
import { crewMembers } from "../data/crewData";

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
    <section className="relative h-[calc(100dvh-96px)] overflow-hidden px-6 py-5 text-white md:h-[calc(100dvh-96px)] md:px-10 md:py-7 lg:h-[calc(100dvh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:py-4">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">02</span>
          Meet your crew
        </h2>

        <div className="flex flex-1 flex-col items-center justify-center gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left content */}
          <div className="relative z-30 flex w-full max-w-[430px] flex-col items-center text-center lg:h-[430px] lg:items-start lg:justify-center lg:text-left xl:h-[460px]">
            <div>
              <p className="mb-2 font-bellefair text-base uppercase text-white/50 md:text-xl lg:text-[24px]">
                {activeCrew.role}
              </p>

              <h1 className="mb-4 font-bellefair text-[28px] uppercase leading-none text-white md:text-[38px] lg:text-[44px] xl:text-[48px]">
                {activeCrew.name}
              </h1>

              <p className="mx-auto max-w-[400px] font-barlow text-[15px] leading-[1.65] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0 lg:max-w-[390px]">
                {activeCrew.bio}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-5 md:mt-10 lg:mt-16">
              {crewMembers.map((member, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={member.id}
                    type="button"
                    aria-label={`Show ${member.name}`}
                    onClick={() => setActiveIndex(index)}
                    className={[
                      "h-3 w-3 rounded-full transition md:h-4 md:w-4",
                      isActive ? "bg-white" : "bg-white/20 hover:bg-white/50",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="relative z-10 flex w-full max-w-[430px] items-end justify-center lg:h-[430px] lg:max-w-[430px] xl:h-[460px] xl:max-w-[460px]">
            <img
              key={activeCrew.id}
              src={activeCrew.image}
              alt={activeCrew.name}
              className="max-h-[220px] w-auto object-contain object-bottom md:max-h-[330px] lg:max-h-[430px] xl:max-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;