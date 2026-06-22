import React, { useEffect, useState } from "react";

const confirmedCompanies = [
  "Accenture",
  "Globant",
  "Mercado Libre",
  "IBM",
  "Telecom",
];

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
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#111111] px-6 pb-20 pt-24 md:pt-40 md:px-14">
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-[linear-gradient(#272727_1px,transparent_1px),linear-gradient(90deg,#272727_1px,transparent_1px)] bg-size-[56px_56px]" />
      </div>

      <div className="pointer-events-none absolute -bottom-25 -right-25 h-175 w-175 bg-[radial-gradient(circle,rgba(200,212,0,0.15)_0%,transparent_65%)]" />

      <div className="relative z-10">
        <div className="mb-10 inline-flex items-center gap-2.5 border border-[#272727] bg-[#1c1c1c] px-4 py-2">
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8D400] animate-pulse" />

          <span className="font-['Chakra_Petch'] text-[0.72rem] uppercase tracking-[0.12em] text-[#aaaaaa]">
            <strong className="text-white">{currentCompany}</strong>{" "}
            ya confirmó su participación — sumá tu empresa
          </span>
        </div>

        <h1 className="mb-9 font-['Chakra_Petch'] text-[clamp(3rem,7vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
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

          <div className="flex flex-col items-stretch gap-4 md:items-end">
            <a
              href="#contacto"
              className="inline-block w-full bg-[#C8D400] px-10 py-4.5 text-center font-['Chakra_Petch'] text-[0.88rem] font-bold uppercase tracking-widest text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#d9e600]"
              aria-label="Quiero sumar mi empresa"
            >
              Quiero sumar mi empresa
            </a>

            <a
              href="#como-funciona"
              className="inline-block w-full border border-[#272727] px-8 py-3.5 text-center font-['Chakra_Petch'] text-[0.82rem] uppercase tracking-[0.08em] text-[#aaaaaa] transition hover:border-[#C8D400]/30 hover:text-white"
              aria-label="Conocer la propuesta"
            >
              Conocer la propuesta
            </a>

            <p className="w-full text-center text-[0.72rem] tracking-[0.04em] text-[#888888]">
              Participación sin costo · Gestionado por Potrero Digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;