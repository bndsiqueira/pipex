"use client";

import { Testimonial } from "@/components/ui/testimonial";

export default function TestimonialSection() {
  return (
    <section className="bg-black py-8 md:py-16">
      <Testimonial
        quote="A Pipex não entregou apenas um software, entregou uma nova forma de operar. Automatizamos nossa prospecção e hoje o time de vendas recebe apenas leads prontos para o fechamento."
        highlightedText="Pipex"
        authorName="Cliente Pipex"
        authorPosition="Diretor de Operações"
      />
    </section>
  );
}
