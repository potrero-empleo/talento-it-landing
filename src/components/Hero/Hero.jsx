import { useEffect, useState } from "react";
import { confirmedCompanies } from "../../data/heroData";
import accentureLogo from "../../assets/company-logos/accenture_blanco.png";

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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#111111] pb-18 pt-22 md:pb-20 md:pt-30"
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
            ya confirmo su participacion - suma tu empresa
          </span>
        </div>

        <h1 className="mb-9 font-['Chakra_Petch'] text-[clamp(3rem,7vw,5.6rem)] font-bold leading-[0.9] tracking-[0.01em] text-white">
          <span className="block md:hidden">
            Encontra el <span className="text-[#C8D400]">talento IT</span>
            <br />
            que buscas.
          </span>

          <span className="hidden md:block">
            <span className="block">El Talento IT</span>
            <span className="block">de Argentina</span>
            <span className="text-[#C8D400]">te está esperando</span>
          </span>
        </h1>

        <div className="mt-4 grid items-end gap-10 md:gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex flex-wrap items-center gap-3 border border-[#2a2a2a] bg-[#151515]/92 px-4 py-3">
              <span className="font-['Chakra_Petch'] text-[0.74rem] uppercase tracking-[0.18em] text-[#a9a9a9]">
                Feria virtual
              </span>
              <span className="hidden h-4 w-px bg-[#343434] md:block" />
              <span className="font-['Chakra_Petch'] text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-white md:text-[1rem]">
                Del 3 al 7 de agosto
              </span>
            </div>

            <p className="max-w-120 text-[1.1rem] leading-[1.75] text-[#aaaaaa]">
              Talento IT conecta a tu empresa con cientos de perfiles IT formados,
              motivados y listos para sumarse a tu equipo desde cualquier provincia
              de Argentina, sin costo y sin friccion.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-4 md:items-center">
            <div className="mb-4 w-full flex items-center justify-center">
              <a
                href="https://www.accenture.com/ar-es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accenture, sponsor oficial. Abrir sitio externo"
                className="focus-ring inline-flex w-full max-w-md flex-col items-center justify-center rounded-md border border-[#272727] bg-[#0f0f0f] px-6 py-3 hover:border-[#C8D400]/30"
              >
                <img
                  src={accentureLogo}
                  alt="Accenture"
                  className="h-auto w-full max-w-55 object-contain"
                  loading="lazy"
                />
                <span className="mt-2 text-center text-[0.78rem] text-[#aaaaaa]">
                  Aliado estrategico
                </span>
              </a>
            </div>

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
