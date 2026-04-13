import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Pipex | Tech House — Software Sob Medida & IA Generativa",
  description:
    "Transformamos operações com software sob medida e IA generativa. Automatize processos, escale vendas e coloque sua empresa no piloto automático.",
  keywords: [
    "Pipex",
    "Tech House",
    "Software sob medida",
    "IA Generativa",
    "Automação",
    "Inteligência Artificial",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
