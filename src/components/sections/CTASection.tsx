"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.04),transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase">
            Pronto para escalar?
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 text-white leading-tight tracking-tight">
            Agende um Diagnóstico Técnico{" "}
            <span className="text-primary">Gratuito</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg max-w-xl mx-auto leading-relaxed">
            Analisamos sua operação e identificamos onde a tecnologia pode
            destravar crescimento real — sem compromisso.
          </p>

          <div className="mt-10">
            <Button asChild className="text-base px-8 h-12 gap-2">
              <a href="#contato">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground/50 text-xs mt-6">
            Sem compromisso &bull; Análise personalizada &bull; Resultados em 48h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
