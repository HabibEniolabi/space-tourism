type ResponsiveBackgroundProps = {
  desktop: string;
  tablet: string;
  mobile: string;
};

const ResponsiveBackground = ({
  desktop,
  tablet,
  mobile,
}: ResponsiveBackgroundProps) => {
  return (
    <picture className="absolute inset-0 z-0">
      <source media="(max-width: 767px)" srcSet={mobile} />
      <source media="(max-width: 1023px)" srcSet={tablet} />

      <img
        src={desktop}
        alt=""
        className="h-full w-full object-cover"
      />
    </picture>
  );
};

export default ResponsiveBackground;