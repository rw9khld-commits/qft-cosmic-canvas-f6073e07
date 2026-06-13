import { useEffect, useRef } from "react";

/**
 * Scroll-driven animation component that responds to user scroll position.
 * Creates parallax effects and reveals content as user scrolls through the page.
 */
export function ScrollDrivenAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Apply scroll-driven transformations
      containerRef.current.style.transform = `translateY(${scrollProgress * 20}px)`;
      containerRef.current.style.opacity = String(0.3 + scrollProgress * 0.7);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 transition-all duration-300"
      style={{
        background: "radial-gradient(ellipse at center, transparent 0%, oklch(0.02 0.01 280 / 0.3) 100%)",
      }}
    />
  );
}
