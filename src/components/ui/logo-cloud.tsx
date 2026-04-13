import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  label?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse duration={20}>
        {logos.map((logo) => (
          <div key={`logo-${logo.alt}`} className="flex items-center gap-1.5">
            <img
              alt={logo.alt}
              className="pointer-events-none h-4 select-none md:h-5 brightness-0 invert"
              height={logo.height || 20}
              loading="lazy"
              src={logo.src}
              width={logo.width || 100}
            />
            {logo.label && (
              <span className="text-white text-sm md:text-base font-medium whitespace-nowrap select-none">
                {logo.label}
              </span>
            )}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
