import type { ReactNode } from "react";
import { QFTSidebar } from "@/components/QFTSidebar";
import { QuantumCanvas } from "@/components/QuantumCanvas";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  children: ReactNode;
}

export function SectionShell({ eyebrow, title, italic, description, children }: Props) {
  return (
    <div className="relative min-h-screen flex text-foreground">
      <QuantumCanvas />
      <QFTSidebar />
      <main className="relative z-10 flex-1 min-w-0 px-6 lg:px-12 py-10 max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Return to Overview
        </Link>

        <header className="mb-12">
          <div className="text-[10px] tracking-[0.4em] uppercase text-violet/80 mb-4">
            {eyebrow}
          </div>
          <h1 className="font-display font-light leading-[1.02] tracking-tight text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground/95">{title}</span>
            {italic && (
              <span className="block italic text-gold/90 mt-2 text-4xl md:text-5xl lg:text-6xl">
                {italic}
              </span>
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            {description}
          </p>
        </header>

        <div className="space-y-8">{children}</div>

        <footer className="mt-24 py-8 text-[10px] text-muted-foreground tracking-[0.3em] uppercase border-t border-violet/10">
          QFT Decoder · Decoding the language of the universe
        </footer>
      </main>
    </div>
  );
}

export function GlassCard({ title, children, eq }: { title: string; children: ReactNode; eq?: string }) {
  return (
    <article className="glass rounded-3xl p-7 md:p-9 relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-violet/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-2xl md:text-3xl text-foreground/95">{title}</h2>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan/80" />
        </div>
        {eq && (
          <div className="font-mono text-sm text-cyan/80 mb-4 border-l border-cyan/30 pl-3">{eq}</div>
        )}
        <div className="text-[15px] leading-relaxed text-muted-foreground font-light space-y-3">
          {children}
        </div>
      </div>
    </article>
  );
}
