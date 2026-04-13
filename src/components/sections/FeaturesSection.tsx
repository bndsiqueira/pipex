"use client";

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Code2, Bot, Cog, GraduationCap } from "lucide-react";

const features: BentoItem[] = [
  {
    title: "Software Customizado",
    description:
      "Sistemas construídos do zero para o seu processo. Escalabilidade real, sem as limitações de ferramentas prontas.",
    icon: <Code2 className="w-4 h-4 text-sky-500" />,
    status: "Core",
    tags: ["Sob Medida", "Escalável", "API"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "IA para Vendas",
    description:
      "Agentes de IA treinados para prospectar, qualificar e agendar reuniões. Seu time foca em fechar.",
    icon: <Bot className="w-4 h-4 text-emerald-500" />,
    status: "IA",
    tags: ["SDR", "BDR"],
  },
  {
    title: "Eficiência Operacional",
    description:
      "Automação de fluxos de trabalho complexos. Reduza custos operacionais e erros humanos com agentes inteligentes.",
    icon: <Cog className="w-4 h-4 text-purple-500" />,
    tags: ["Automação", "Processos"],
    colSpan: 2,
  },
  {
    title: "Consultoria & Treinamento",
    description:
      "Capacitamos sua liderança e time para dominar a cultura de IA e extrair o máximo das ferramentas.",
    icon: <GraduationCap className="w-4 h-4 text-amber-500" />,
    status: "Educação",
    tags: ["Workshop", "Mentoria"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="solucoes" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">
            Soluções
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 text-white tracking-tight">
            O que entregamos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Quatro pilares de tecnologia aplicada ao crescimento do seu negócio.
          </p>
        </div>

        <BentoGrid items={features} />
      </div>
    </section>
  );
}
