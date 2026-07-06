import potreroEmpleosLogo from "../../assets/_potreroempleos.png";
import { whatsappConfig } from "../../data/contactData";

const Navbar = () => {
  const whatsappUrl = `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(
    whatsappConfig.text
  )}`;

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const nav = document.querySelector("nav");
      const navHeight = nav?.offsetHeight ?? 0;
      const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({
        top: Math.max(targetY, 0),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${id}`);
      el.setAttribute("tabindex", "-1");
      window.setTimeout(() => {
        el.focus({ preventScroll: true });
      }, 450);
    } else {
      window.location.href = `#${id}`;
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-100 border-b border-[#272727] bg-[#111111]/90 backdrop-blur-2xl">
      <div className="layout-container flex items-center justify-between py-4 md:py-5">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="focus-ring flex min-w-0 flex-col gap-px items-start"
        >
          <img
            src={potreroEmpleosLogo}
            alt="Potrero Empleos"
            className="h-8 w-auto max-w-[185px] object-contain sm:h-9 md:h-10"
          />

          <span className="hidden text-[0.55rem] uppercase tracking-[0.12em] text-[#888888] sm:block md:text-[0.65rem] md:tracking-[0.14em]">
            Feria virtual de empleo Tech · Argentina
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#como-participar"
            onClick={(e) => handleScroll(e, "como-participar")}
            className="focus-ring hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors duration-200 hover:text-[#C8D400] md:block"
          >
            Cómo participar
          </a>

          <a
            href="#speakers"
            onClick={(e) => handleScroll(e, "speakers")}
            className="focus-ring hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors duration-200 hover:text-[#C8D400] md:block"
          >
            Speakers
          </a>

          <a
            href="#companies"
            onClick={(e) => handleScroll(e, "companies")}
            className="focus-ring hidden text-[0.82rem] tracking-[0.04em] text-[#aaaaaa] transition-colors duration-200 hover:text-[#C8D400] md:block"
          >
            Empresas
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp focus-ring inline-block whitespace-nowrap bg-[#C8D400] px-4 py-2 font-['Chakra_Petch'] text-[0.82rem] font-bold uppercase tracking-[0.06em] text-[#111111] transition hover:-translate-y-px hover:bg-[#d9e600] sm:px-5.5 sm:py-2.5 sm:text-[0.9rem]"
            aria-label="Quiero participar por WhatsApp"
          >
            Quiero Participar!
          </a>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
