import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-[#aaa]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <h4 className="mb-3 font-['Chakra_Petch'] text-lg font-semibold text-white">
              Talento IT
            </h4>
            <p className="text-sm text-[#909090] max-w-xl">
              Conectamos empresas con talento IT federal — participación sin costo
              y sin fricción. Gestionado por Potrero Digital.
            </p>
          </div>

          <nav aria-label="Enlaces rápidos" className="flex flex-col gap-2">
            <a href="#como-funciona" className="text-sm hover:text-white">
              Cómo funciona
            </a>
            <a href="#speakers" className="text-sm hover:text-white">
              Speakers
            </a>
            <a href="#contacto" className="text-sm hover:text-white">
              Contacto
            </a>
            <a href="#faq" className="text-sm hover:text-white">
              Preguntas frecuentes
            </a>
          </nav>

          <div className="text-sm">
            <p className="mb-2 text-[#aaaaaa]">Contactanos</p>
            <p className="text-sm text-white">hola@potrerodigital.org</p>
            <p className="mt-3 text-[0.82rem] text-[#888888]">
              Síguenos en redes para novedades y convocatorias.
            </p>
          </div>
        </div>

        

        <div className="mt-8 border-t border-[#222] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[0.82rem] text-[#888888]">
              © {new Date().getFullYear()} Potrero Digital — Todos los derechos
              reservados.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaaaaa] hover:text-white flex items-center gap-2"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M16 11.99a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaaaaa] hover:text-white flex items-center gap-2"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7.5 10.5v6M7.5 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 10.5v6M12 8.25a1 1 0 011-1h.01a1 1 0 011 1v.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaaaaa] hover:text-white flex items-center gap-2"
                aria-label="Twitter"
                title="Twitter"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 6.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.6.4-1.3.6-2 .8C17.9 5 17 4.5 16 4.5c-1.6 0-2.8 1.3-2.8 2.8 0 .2 0 .4.1.6-2.3-.1-4.3-1.2-5.6-2.9-.3.6-.5 1.3-.5 2.1 0 1.5.8 2.9 2 3.7-.5 0-1-.1-1.4-.4v.1c0 2.1 1.4 3.9 3.3 4.3-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.6 1.4-4.2 1.4-.3 0-.6 0-.9-.1 1.5 1 3.3 1.6 5.2 1.6 6.2 0 9.6-5.1 9.6-9.6v-.4c.7-.5 1.2-1.2 1.6-2z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
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