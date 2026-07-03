const StripeOverlay = () => {
  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-[2] w-full max-w-[1000px] -translate-x-1/2 overflow-hidden max-lg:max-w-[720px] max-md:max-w-[340px]">
      <div className="h-full w-full bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.045)_0px,_rgba(255,255,255,0.045)_56px,_transparent_56px,_transparent_84px)] opacity-70" />
    </div>
  );
};

export default StripeOverlay;