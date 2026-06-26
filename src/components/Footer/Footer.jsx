import potreroEmpleosLogo from "../../assets/_potreroempleos.png";
import { quickLinks, contactEmail } from "../../data/contactData";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-[#aaa]">
      <div className="layout-container py-12 md:py-16">
        <div className="grid gap-10 border border-[#202020] bg-[#111111] px-6 py-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start md:px-8 md:py-10">
          <div className="max-w-xl">
            <img
              src={potreroEmpleosLogo}
              alt="Potrero Empleos"
              className="h-10 w-auto sm:h-11 md:h-12"
            />
            <p className="mt-4 text-sm leading-[1.8] text-[#909090]">
              Conectamos empresas con talento IT federal, con participacion sin
              costo y una propuesta pensada para acercar oportunidades reales.
            </p>
          </div>

          <nav aria-label="Enlaces rápidos" className="flex flex-col gap-2 self-start">
            <p className="mb-2 font-['Chakra_Petch'] text-[0.84rem] uppercase tracking-[0.08em] text-white">
              Navegacion
            </p>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-[#aaaaaa] transition-colors duration-200 hover:text-[#C8D400]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <p className="mb-4 font-['Chakra_Petch'] text-[0.84rem] uppercase tracking-[0.08em] text-white">
              Contacto
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="focus-ring text-sm text-white transition-colors duration-200 hover:text-[#C8D400]"
            >
              {contactEmail}
            </a>
            <p className="mt-3 text-[0.82rem] text-[#888888]">
              Seguinos en redes para novedades y convocatorias.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#222] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[0.82rem] text-[#888888]">
              © {new Date().getFullYear()} Potrero Empleos - Todos los derechos
              reservados.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 text-[#aaaaaa] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C8D400]"
                aria-label="Instagram, abre en nueva pestana"
                title="Instagram"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M16 11.99a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 text-[#aaaaaa] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C8D400]"
                aria-label="LinkedIn, abre en nueva pestana"
                title="LinkedIn"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7.5 10.5v6M7.5 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 10.5v6M12 8.25a1 1 0 011-1h.01a1 1 0 011 1v.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 text-[#aaaaaa] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C8D400]"
                aria-label="Twitter, abre en nueva pestana"
                title="Twitter"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 6.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.6.4-1.3.6-2 .8C17.9 5 17 4.5 16 4.5c-1.6 0-2.8 1.3-2.8 2.8 0 .2 0 .4.1.6-2.3-.1-4.3-1.2-5.6-2.9-.3.6-.5 1.3-.5 2.1 0 1.5.8 2.9 2 3.7-.5 0-1-.1-1.4-.4v.1c0 2.1 1.4 3.9 3.3 4.3-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.6 1.4-4.2 1.4-.3 0-.6 0-.9-.1 1.5 1 3.3 1.6 5.2 1.6 6.2 0 9.6-5.1 9.6-9.6v-.4c.7-.5 1.2-1.2 1.6-2z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
