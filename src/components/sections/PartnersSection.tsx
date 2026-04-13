"use client";

import React from "react";
import { LogoCloud } from "@/components/ui/logo-cloud";

const logos = [
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/python.svg", alt: "Python", label: "Python" },
  { src: "https://svgl.app/library/aws_dark.svg", alt: "AWS" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/nextjs_logo_dark.svg", alt: "Next.js" },
];

export default function PartnersSection() {
  return (
    <section className="relative py-16 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">
            Tecnologia
          </p>
          <h2 className="text-xl md:text-2xl font-medium mt-3 text-white">
            <span className="text-muted-foreground">Stack de confiança.</span>{" "}
            Resultados reais.
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            OpenAI Partner &bull; Python &bull; AWS &bull; Pipedrive e RD Station
          </p>
        </div>

        <div className="mx-auto my-5 h-px max-w-sm bg-white/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        <LogoCloud logos={logos} />
        <div className="mt-5 h-px bg-white/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
