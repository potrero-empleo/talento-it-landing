import { quickLinks, contactEmail } from "../../data/contactData";

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
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <p className="mb-2 text-[#aaaaaa]">Contactanos</p>
            <p className="text-sm text-white">{contactEmail}</p>
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
                href="https://www.instagram.com/potrerodigital/"
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
                href="https://www.linkedin.com/company/potrero-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaaaaa] hover:text-white flex items-center gap-2"
                aria-label="LinkedIn"
                title="LinkedIn"
              >

                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
<a
                href="https://www.tiktok.com/@potrerodigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaaaaa] hover:text-white flex items-center gap-2"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg className="w-8 h-8" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
               
                 <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
               </svg>
               <span className="sr-only">TikTok</span>
              </a>
<a
                href="https://x.com/PotreroDigital"
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
