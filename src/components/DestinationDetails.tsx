import type { Destination } from "../data/destinationData";

type DestinationDetailsProps = {
  destinations: Destination[];
  activeDestination: Destination;
  onSelectDestination: (destination: Destination) => void;
};

const DestinationDetails = ({
  destinations,
  activeDestination,
  onSelectDestination,
}: DestinationDetailsProps) => {
  return (
    <div className="w-full max-w-[370px] text-center lg:text-left xl:max-w-[400px]">
      <div className="mb-5 flex items-center justify-center gap-6 lg:justify-start">
        {destinations.map((destination) => {
          const isActive = activeDestination.id === destination.id;

          return (
            <button
              key={destination.id}
              type="button"
              onClick={() => onSelectDestination(destination)}
              className={[
                "relative pb-3 font-barlow-condensed text-[13px] uppercase tracking-[2.2px] text-[#d0d6f9] transition hover:text-white",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-transparent cursor-pointer",
                isActive
                  ? "text-white after:bg-white"
                  : "hover:after:bg-white/50",
              ].join(" ")}
            >
              {destination.name}
            </button>
          );
        })}
      </div>

      <h1 className="mb-4 font-bellefair text-[56px] font-normal uppercase leading-none text-white md:text-[76px] lg:mb-5 lg:text-[82px] xl:text-[90px]">
        {activeDestination.name}
      </h1>

      <p className="mx-auto max-w-[370px] font-barlow text-[15px] leading-[1.7] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0">
        {activeDestination.description}
      </p>

      <div className="mt-7 border-t border-white/20 pt-6 md:grid md:grid-cols-2 md:gap-6 lg:mt-8">
        <div>
          <p className="mb-2 font-barlow-condensed text-[12px] uppercase tracking-[2.2px] text-[#d0d6f9]">
            Avg. distance
          </p>

          <p className="font-bellefair text-[26px] uppercase text-white md:text-[28px]">
            {activeDestination.distance}
          </p>
        </div>

        <div className="mt-5 md:mt-0">
          <p className="mb-2 font-barlow-condensed text-[12px] uppercase tracking-[2.2px] text-[#d0d6f9]">
            Est. travel time
          </p>

          <p className="font-bellefair text-[26px] uppercase text-white md:text-[28px]">
            {activeDestination.travelTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;