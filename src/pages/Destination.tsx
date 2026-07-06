import { useState } from "react";
import DestinationDetails from "../components/DestinationDetails";
import { destinations } from "../data/spaceData";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <section className="relative min-h-[calc(100svh-96px)] px-6 pb-10 pt-5 text-white md:min-h-[calc(100svh-96px)] md:px-10 md:pb-12 md:pt-7 lg:min-h-[calc(100svh-128px)] lg:px-[clamp(4rem,8vw,120px)] lg:pb-8 lg:pt-5">
      <div className="mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-[1110px] flex-col lg:min-h-[calc(100svh-128px)]">
        <h2 className="relative z-30 font-barlow-condensed text-base uppercase tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] lg:text-[24px] lg:tracking-[4px]">
          <span className="mr-4 font-bold text-white/25">01</span>
          Pick your destination
        </h2>

        <div className="grid flex-1 content-center items-center gap-8 pt-8 md:gap-12 md:pt-10 lg:grid-cols-2 lg:gap-20 lg:pt-4">
          <div className="flex justify-center lg:justify-start lg:pl-10">
            <img
              src={activeDestination.pngImage}
              alt={activeDestination.name}
              className="w-[170px] object-contain md:w-[300px] lg:w-[380px] xl:w-[445px]"
            />
          </div>

          <div className="relative z-30 flex justify-center lg:justify-end">
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