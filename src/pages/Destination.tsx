import { useState } from "react";
import DestinationDetails from "../components/DestinationDetails";
import { destinations } from "../data/destinationData";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <section className="h-[calc(100dvh-96px)] overflow-hidden px-6 py-6 text-white md:h-[calc(100dvh-96px)] md:px-10 md:py-9 lg:h-[calc(100dvh-128px)] lg:px-[clamp(5rem,10vw,154px)] lg:py-5">
      <div className="mx-auto flex h-full w-full max-w-[1110px] flex-col">
        <h2 className="font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
          <span className="mr-4 font-bold text-white/25">01</span>
          Pick your destination
        </h2>

        <div className="flex flex-1 flex-col items-center justify-evenly gap-5 md:gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
            <img
              src={activeDestination.image}
              alt={activeDestination.name}
              className="w-[150px] object-contain md:w-[270px] lg:w-[420px] xl:w-[445px]"
            />
          </div>

          <div className="relative z-30">
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
