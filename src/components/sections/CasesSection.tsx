"use client";

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Car, ShoppingCart, Heart, Briefcase } from "lucide-react";

const cases: BentoItem[] = [
  {
    title: "Mobilidade",
    meta: "Motos e Carros",
    description:
      "Gestão de leads e automação de estoque para acelerar o giro do pátio.",
    icon: <Car className="w-4 h-4 text-sky-500" />,
    status: "Ativo",
    tags: ["Leads", "Estoque"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Varejo & Consumo",
    meta: "E-commerces e Pet Shops",
    description:
      "Estratégias de LTV e automação de atendimento pós-venda.",
    icon: <ShoppingCart className="w-4 h-4 text-emerald-500" />,
    status: "Ativo",
    tags: ["LTV", "Pós-venda"],
  },
  {
    title: "Educação & Saúde",
    meta: "Escolas, Clínicas e Salões",
    description:
      "Agendamento inteligente e fluxos de retenção via IA.",
    icon: <Heart className="w-4 h-4 text-rose-500" />,
    tags: ["Retenção", "Agendamento"],
  },
  {
    title: "Serviços B2B",
    meta: "Agências e Assessorias",
    description:
      "Prospecção em massa e qualificação automática de SDR/BDR para escalar o funil.",
    icon: <Briefcase className="w-4 h-4 text-amber-500" />,
    status: "Ativo",
    tags: ["Prospecção", "Funil"],
    colSpan: 2,
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">
            Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 text-white tracking-tight">
            Soluções que entendem o seu mercado
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Operações transformadas em diversos segmentos com inteligência
            aplicada onde ela mais gera retorno.
          </p>
        </div>

        <BentoGrid items={cases} />
      </div>
    </section>
  );
}
