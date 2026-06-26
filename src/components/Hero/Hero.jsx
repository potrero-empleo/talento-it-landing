import { useEffect, useState } from "react";
import { confirmedCompanies } from "../../data/heroData";

const Hero = () => {
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  useEffect(() => {
    if (confirmedCompanies.length <= 1) return undefined;
    const interval = setInterval(() => {
      setCurrentCompanyIndex((prevIndex) =>
        prevIndex === confirmedCompanies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentCompany =
    confirmedCompanies[currentCompanyIndex] || confirmedCompanies[0] || "";

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#111111] pb-20 pt-24 md:pt-40"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-[linear-gradient(#272727_1px,transparent_1px),linear-gradient(90deg,#272727_1px,transparent_1px)] bg-size-[56px_56px]" />
      </div>

      <div className="pointer-events-none absolute -bottom-25 -right-25 h-175 w-175 bg-[radial-gradient(circle,rgba(200,212,0,0.15)_0%,transparent_65%)]" />

      <div className="layout-container relative z-10">
        <div className="mb-10 inline-flex items-center gap-2.5 border border-[#272727] bg-[#1c1c1c] px-4 py-2">
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8D400] animate-pulse" />

          <span className="font-['Chakra_Petch'] text-[0.78rem] uppercase tracking-[0.08em] text-[#aaaaaa]">
            <strong className="text-white">{currentCompany}</strong>{" "}
            ya confirmó su participación — sumá tu empresa
          </span>
        </div>

        <h1 className="mb-9 font-['Chakra_Petch'] text-[clamp(3rem,7vw,5.6rem)] font-bold leading-[0.9] tracking-[0.01em] text-white">
          {/* Mobile */}
          <span className="block md:hidden">
            Encontrá el <span className="text-[#C8D400]">talento IT</span>
            <br />
            que buscás.
          </span>

          {/* Desktop */}
          <span className="hidden md:block">
            <span className="block">El Talento IT</span>
            <span className="block">de Argentina</span>
            <span className="text-[#C8D400]">te está esperando</span>
          </span>
        </h1>

        <div className="mt-4 grid items-end gap-10 md:gap-12 md:grid-cols-2">
          <p className="max-w-120 text-[1.1rem] leading-[1.75] text-[#aaaaaa]">
            Talento IT conecta a tu empresa con cientos de perfiles IT formados,
            motivados y listos para sumarse a tu equipo desde cualquier provincia
            de Argentina, sin costo y sin fricción.
          </p>

          <div className="flex flex-col items-stretch gap-4 md:items-center">
            {/* Sponsor encima de los CTAs — mismo ancho que los botones */}
            <div className="mb-4 w-full flex items-center justify-center">
              <a
                href="https://www.accenture.com/ar-es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accenture, sponsor oficial. Abrir sitio externo"
                className="focus-ring inline-flex w-full max-w-md flex-col items-center justify-center rounded-md border border-[#272727] bg-[#0f0f0f] px-6 py-3 hover:border-[#C8D400]/30"
              >
                <img
                  src="/accenture_blanco.png"
                  alt="Accenture"
                  className="w-full max-w-55 h-auto object-contain"
                  loading="lazy"
                />
                <span className="mt-2 text-[0.78rem] text-[#aaaaaa] text-center">
                  Sponsor oficial
                </span>
              </a>
            </div>

            {/* Botones: match width del sponsor (max-w-md). En móvil son full-width */}
            <div className="w-full max-w-md flex flex-col items-stretch gap-4 md:items-end">
              <a
                href="#inscribite"
                className="focus-ring inline-block w-full bg-[#C8D400] px-6 py-3.5 text-center font-['Chakra_Petch'] text-[0.92rem] font-bold uppercase tracking-[0.08em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#d9e600]"
                aria-label="Quiero sumar mi empresa"
              >
                Quiero sumar mi empresa
              </a>

              <a
                href="#como-participar"
                className="focus-ring inline-block w-full border border-[#272727] px-6 py-3.5 text-center font-['Chakra_Petch'] text-[0.88rem] uppercase tracking-[0.06em] text-[#aaaaaa] transition hover:border-[#C8D400]/30 hover:text-white"
                aria-label="Conocer la propuesta"
              >
                Conocer la propuesta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
