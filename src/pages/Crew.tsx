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
    <section className="relative h-[calc(100dvh-96px)] overflow-hidden px-6 py-5 text-white md:h-[calc(100dvh-96px)] md:px-10 md:py-7 lg:h-[calc(100dvh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:py-5">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">02</span>
          Meet your crew
        </h2>

        <div className="flex flex-1 items-center justify-center">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[430px_1fr] lg:gap-12 xl:grid-cols-[440px_1fr] xl:gap-16">
            {/* Text content */}
            <div className="relative z-30 flex min-h-[330px] flex-col items-center justify-center text-center md:min-h-[350px] lg:min-h-[420px] lg:items-start lg:justify-between lg:text-left">
              <div>
                <p className="mb-3 font-bellefair text-base uppercase text-white/50 md:text-xl lg:text-[24px]">
                  {activeCrew.role}
                </p>

                <h1 className="mb-5 font-bellefair text-[30px] uppercase leading-none text-white md:text-[42px] lg:text-[44px] xl:text-[48px]">
                  {activeCrew.name}
                </h1>

                <p className="mx-auto max-w-[430px] font-barlow text-[15px] leading-[1.75] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0 lg:max-w-[390px]">
                  {activeCrew.bio}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-5 lg:mt-0">
                {crewMembers.map((member, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={member.id}
                      type="button"
                      aria-label={`Show ${member.name}`}
                      onClick={() => setActiveIndex(index)}
                      className={[
                        "h-3 w-3 rounded-full transition duration-300 md:h-3.5 md:w-3.5",
                        isActive
                          ? "bg-white"
                          : "bg-white/20 hover:bg-white/50",
                      ].join(" ")}
                    />
                  );
                })}
              </div>
            </div>

            {/* Image stage */}
            <div className="flex min-h-[260px] items-end justify-center md:min-h-[360px] lg:min-h-[420px] lg:justify-end">
              <div className="relative flex h-[260px] w-full max-w-[360px] items-end justify-center overflow-hidden md:h-[360px] md:max-w-[430px] lg:h-[420px] lg:max-w-[470px] xl:h-[450px] xl:max-w-[500px]">
                <img
                  key={activeCrew.id}
                  src={activeCrew.image}
                  alt={activeCrew.name}
                  className="h-full w-auto object-contain object-bottom"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
                  }}
                />

                {/* extra soft bottom blend */}
               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0f1d]/70 via-[#0b0f1d]/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;