import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[1100ms] ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[2px]"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
