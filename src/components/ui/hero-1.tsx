"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8
      min-h-[calc(100vh-40px)] overflow-hidden
      bg-[linear-gradient(to_bottom,#000,transparent_30%,#1a2a3a_78%,#0c1520)]
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-60 h-[600px] w-full
        bg-[linear-gradient(to_right,#1a2a3a_1px,transparent_1px),linear-gradient(to_bottom,#1a2a3a_1px,transparent_1px)]
        bg-[size:6rem_5rem]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)]
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%]
        -translate-x-1/2 rounded-[100%] bg-black
        bg-[radial-gradient(closest-side,#000_82%,#0EA5E9_200%)]
        animate-fade-up"
      />

      {/* Eyebrow */}
      {eyebrow && (
        <span
          className="inline-flex items-center text-sm text-gray-400 mx-auto px-5 py-2
          bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent
          border border-white/10
          rounded-3xl w-fit tracking-tight uppercase"
        >
          {eyebrow}
          <ChevronRight className="inline w-4 h-4 ml-2" />
        </span>
      )}

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance
        bg-gradient-to-br from-white from-30% to-white/40
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 -translate-y-4 text-balance
        text-lg tracking-tight text-gray-400
        opacity-0 md:text-xl max-w-2xl mx-auto"
      >
        {subtitle}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0 [animation-delay:200ms]">
        {ctaLabel && (
          <Button
            asChild
            className="z-20 tracking-tight text-center text-base px-8 h-12"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        )}
        {secondaryCtaLabel && secondaryCtaHref && (
          <Button
            asChild
            variant="outline"
            className="z-20 tracking-tight text-center text-base px-8 h-12 border-white/15 hover:border-white/30 bg-white/5"
          >
            <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
          </Button>
        )}
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px]
        after:absolute after:inset-0 after:z-50
        after:[background:linear-gradient(to_top,#000_10%,transparent)]"
      />
    </section>
  );
}
