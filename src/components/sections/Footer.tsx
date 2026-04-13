const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            Pipex
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs">
            &copy; {new Date().getFullYear()} Pipex Tech House. Todos os
            direitos reservados.
          </p>
          <p className="text-muted-foreground/30 text-xs">
            Tecnologia invisível. Resultado inevitável.
          </p>
        </div>
      </div>
    </footer>
  );
}
