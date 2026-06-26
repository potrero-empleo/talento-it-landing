import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Volver arriba"
      title="Volver arriba"
      className={`focus-ring fixed bottom-[5.8rem] right-5 z-[9998] flex h-12 w-12 items-center justify-center rounded-full border border-[#C8D400]/35 bg-[#151515]/95 text-[#C8D400] shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D400]/70 hover:bg-[#1b1b1b] hover:text-[#d9e600] md:bottom-[6.2rem] ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="text-lg leading-none">↑</span>
    </button>
  );
}
