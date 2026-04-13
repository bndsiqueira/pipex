"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Target } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const pillars = [
  {
    icon: Target,
    title: "Foco em Resultado",
    text: "Cada linha de código é desenhada para gerar lucro direto ou poupar tempo operacional.",
    glow: "blue" as const,
  },
  {
    icon: Zap,
    title: "Agilidade Tech House",
    text: "MVPs e soluções funcionais em ciclos curtos. Sem cronogramas intermináveis.",
    glow: "purple" as const,
  },
  {
    icon: Cpu,
    title: "IA Generativa Aplicada",
    text: "Utilizamos o que há de mais avançado em IA para criar soluções que aprendem e evoluem.",
    glow: "blue" as const,
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-medium tracking-wider uppercase">
              Quem Somos
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold mt-3 text-white leading-tight tracking-tight">
              A Mentalidade Pipex
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Na <span className="text-white font-medium">Pipex</span>,
              a tecnologia serve ao negócio — não o contrário. Somos uma Tech
              House focada em infraestruturas digitais que funcionam como motor
              de crescimento.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Unimos engenharia de software de alta performance com a fronteira
              da Inteligência Artificial Generativa para resolver o que
              softwares de prateleira não conseguem.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.04]">
              <p className="text-primary/80 text-sm italic leading-relaxed">
                &ldquo;A tecnologia deve ser invisível. O resultado deve ser
                inevitável.&rdquo;
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                — Pipex
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {pillars.map((item) => (
              <GlowCard
                key={item.title}
                glowColor={item.glow}
                className="!p-5"
              >
                <div className="relative z-10 flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
