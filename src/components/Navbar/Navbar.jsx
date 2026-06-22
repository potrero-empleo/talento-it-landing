import React from "react";
import potrero_logo from "../../assets/potrero_logo.png";

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // actualizar hash sin recargar
      window.history.replaceState(null, "", `#${id}`);
      // opcional: mover foco al elemento para accesibilidad
      el.setAttribute("tabindex", "-1");
      el.focus();
    } else {
      // fallback: navegar al hash (útil si la sección está en otra ruta)
      window.location.href = `#${id}`;
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-100 border-b border-[#272727] bg-[#111111]/90 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-6 py-4 md:px-14 md:py-5">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="flex min-w-0 flex-col gap-px"
        >
          <img
            src={potrero_logo}
            alt="Potrero Digital"
            className="h-8 w-auto sm:h-9 md:h-12"
          />

          <span className="hidden text-[0.55rem] uppercase tracking-[0.12em] text-[#888888] sm:block md:text-[0.65rem] md:tracking-[0.14em]">
            Feria virtual de empleo Tech · Argentina
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#como-participar"
            onClick={(e) => handleScroll(e, "como-participar")}
            className="hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors hover:text-white md:block"
          >
            Cómo participar
          </a>

          <a
            href="#speakers"
            onClick={(e) => handleScroll(e, "speakers")}
            className="hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors hover:text-white md:block"
          >
            Speakers
          </a>

          <a
            href="#empresas"
            onClick={(e) => handleScroll(e, "empresas")}
            className="hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors hover:text-white md:block"
          >
            Empresas
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleScroll(e, "contacto")}
            className="inline-block whitespace-nowrap bg-[#C8D400] px-4 py-2 font-['Chakra_Petch'] text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#111111] transition hover:-translate-y-px hover:bg-[#d9e600] sm:px-5.5 sm:py-2.5 sm:text-[0.78rem] sm:tracking-widest"
          >
            Quiero Participar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

