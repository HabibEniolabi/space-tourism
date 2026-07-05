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
    <section className="relative h-[calc(100dvh-96px)] overflow-hidden px-6 pt-4 text-white md:h-[calc(100dvh-96px)] md:px-10 md:pt-7 lg:h-[calc(100dvh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:pt-4">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">02</span>
          Meet your crew
        </h2>

        <div className="relative flex flex-1 flex-col items-center justify-center gap-6 md:pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pt-0">
          <div className="relative z-30 flex w-full max-w-[440px] flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div>
              <p className="mb-2 font-bellefair text-base uppercase text-white/50 md:text-xl lg:mb-3 lg:text-[24px]">
                {activeCrew.role}
              </p>

              <h1 className="mb-4 font-bellefair text-[28px] uppercase leading-none text-white md:text-[36px] lg:mb-5 lg:text-[44px] xl:text-[40px]">
                {activeCrew.name}
              </h1>

              <p className="mx-auto max-w-[420px] font-barlow text-[15px] leading-[1.65] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0 lg:max-w-[390px]">
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

          <div className="relative z-10 flex w-full flex-1 items-end justify-center lg:justify-end">
            <img
              key={activeCrew.id}
              src={activeCrew.image}
              alt={activeCrew.name}
              className="max-h-[210px] w-auto object-contain md:max-h-[340px] lg:max-h-[440px] xl:max-h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;