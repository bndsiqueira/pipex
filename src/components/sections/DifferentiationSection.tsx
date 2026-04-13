"use client";

import { TrendingUp, Timer, Network } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const differentiators = [
  {
    icon: TrendingUp,
    title: "Foco Obsessivo em ROI",
    description:
      "Cada linha de código ou prompt de IA é desenhado para gerar lucro direto ou poupar tempo operacional valioso.",
    metric: "ROI",
    metricLabel: "Primeiro",
    glow: "blue" as const,
  },
  {
    icon: Timer,
    title: "Agilidade Tech House",
    description:
      "Entregamos MVPs e soluções funcionais em ciclos curtos, permitindo que sua empresa colha resultados enquanto o projeto escala.",
    metric: "MVP",
    metricLabel: "Rápido",
    glow: "purple" as const,
  },
  {
    icon: Network,
    title: "Integração Total",
    description:
      "Nossas soluções nascem integradas ao seu CRM, disparos em massa e ferramentas de prospecção. Um organismo digital único.",
    metric: "360°",
    metricLabel: "Integrado",
    glow: "blue" as const,
  },
];

export default function DifferentiationSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">
            Diferencial
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 text-white tracking-tight">
            Por que a Pipex?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <GlowCard
              key={item.title}
              glowColor={item.glow}
              className="text-center"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="mb-5">
                  <span className="text-3xl font-bold text-primary font-mono">
                    {item.metric}
                  </span>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                    {item.metricLabel}
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
