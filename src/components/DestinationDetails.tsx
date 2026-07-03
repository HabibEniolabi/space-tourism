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
    <div className="w-full max-w-[445px] text-center lg:text-left">
      <div className="mb-6 flex items-center justify-center gap-7 lg:justify-start">
        {destinations.map((destination) => {
          const isActive = activeDestination.id === destination.id;

          return (
            <button
              key={destination.id}
              type="button"
              onClick={() => onSelectDestination(destination)}
              className={[
                "relative pb-3 font-barlow-condensed text-sm uppercase tracking-[2.36px] text-[#d0d6f9] transition hover:text-white",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-transparent",
                isActive ? "text-white after:bg-white" : "hover:after:bg-white/50",
              ].join(" ")}
            >
              {destination.name}
            </button>
          );
        })}
      </div>

      <h1 className="mb-4 font-bellefair text-[56px] font-normal uppercase leading-none text-white md:text-[80px] lg:mb-6 lg:text-[100px]">
        {activeDestination.name}
      </h1>

      <p className="mx-auto max-w-[573px] font-barlow text-[15px] leading-[1.65] text-[#d0d6f9] md:text-base md:leading-7 lg:mx-0 lg:max-w-[445px] lg:text-lg lg:leading-8">
        {activeDestination.description}
      </p>

      <div className="mt-6 border-t border-white/20 pt-5 md:mt-8 md:grid md:grid-cols-2 md:gap-8 md:pt-7 lg:mt-10">
        <div>
          <p className="mb-2 font-barlow-condensed text-[13px] uppercase tracking-[2.36px] text-[#d0d6f9]">
            Avg. distance
          </p>

          <p className="font-bellefair text-[28px] uppercase text-white">
            {activeDestination.distance}
          </p>
        </div>

        <div className="mt-5 md:mt-0">
          <p className="mb-2 font-barlow-condensed text-[13px] uppercase tracking-[2.36px] text-[#d0d6f9]">
            Est. travel time
          </p>

          <p className="font-bellefair text-[28px] uppercase text-white">
            {activeDestination.travelTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;