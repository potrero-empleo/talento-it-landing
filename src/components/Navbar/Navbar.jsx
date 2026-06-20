import React from "react";
import potrero_logo from "../../assets/potrero_logo.png";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] border-b border-[#272727] bg-[#111111]/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-14 md:py-5">
        <a href="#" className="flex min-w-0 flex-col gap-[1px]">
          <img
            src={potrero_logo}
            alt="Potrero Digital"
            className="h-8 w-auto sm:h-9 md:h-10"
          />

          <span className="hidden text-[0.55rem] uppercase tracking-[0.12em] text-[#888888] sm:block md:text-[0.65rem] md:tracking-[0.14em]">
            Feria virtual de empleo Tech · Argentina
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#como-funciona"
            className="hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors hover:text-white md:block"
          >
            Cómo funciona
          </a>

          <a
            href="#perfiles"
            className="hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors hover:text-white md:block"
          >
            Candidatos
          </a>

          <a
            href="#contacto"
            className="inline-block whitespace-nowrap bg-[#C8D400] px-4 py-2 font-['Chakra_Petch'] text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#111111] transition hover:-translate-y-[1px] hover:bg-[#d9e600] sm:px-[22px] sm:py-[10px] sm:text-[0.78rem] sm:tracking-[0.1em]"
          >
            Participar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;