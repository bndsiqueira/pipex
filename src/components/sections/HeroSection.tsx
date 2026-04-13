"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full h-screen relative overflow-hidden bg-black/[0.96]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#0EA5E9"
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 px-8 md:px-16 lg:px-24 relative z-10 flex flex-col justify-center">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Tech House
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight leading-[1.1]">
            Sua empresa no piloto automático
          </h1>
          <p className="mt-5 text-neutral-400 max-w-lg leading-relaxed">
            Software sob medida e IA generativa para escalar vendas e
            eliminar tarefas operacionais repetitivas. Da estratégia ao
            código, transformamos tecnologia em lucro.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild className="text-sm px-6 h-11 gap-2">
              <a href="#contato">
                Agendar Diagnóstico
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-sm px-6 h-11 border-white/10 hover:border-white/20 bg-white/[0.02]"
            >
              <a href="#cases">Ver Cases</a>
            </Button>
          </div>
        </div>

        {/* Right content - Spline 3D */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
