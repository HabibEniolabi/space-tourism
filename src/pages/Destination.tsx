import { useState } from "react";
import DestinationDetails from "../components/DestinationDetails";
import { destinations } from "../data/destinationData";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <section className="relative h-[calc(100dvh-96px)] overflow-hidden px-6 py-5 text-white md:h-[calc(100dvh-96px)] md:px-10 md:py-7 lg:h-[calc(100dvh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:py-5">
      <div className="mx-auto flex h-full w-full max-w-[980px] flex-col">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">01</span>
          Pick your destination
        </h2>

        <div className="mt-12 flex flex-1 flex-col items-center justify-center gap-8 md:mt-14 md:gap-10 lg:mt-16 lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:gap-24">
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
            <img
              src={activeDestination.image}
              alt={activeDestination.name}
              className="w-[150px] object-contain md:w-[250px] lg:w-[380px] xl:w-[410px]"
            />
          </div>

          <div className="relative z-30 w-full lg:w-auto">
            <DestinationDetails
              destinations={destinations}
              activeDestination={activeDestination}
              onSelectDestination={setActiveDestination}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
