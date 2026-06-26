import potreroLogo from "../../assets/potrero_logo.png";
import compromisoLogo from "../../assets/Logo Compromiso - Principal.png";
import {
  institutionalPartners,
  institutionalPillars,
  institutionalStats,
  institutionalSupportNote,
} from "../../data/institutionalData";

const Institutional = () => {
  const partnerLogos = {
    "potrero-digital": potreroLogo,
    "fundacion-compromiso": compromisoLogo,
  };

  return (
    <section className="bg-[#111111] py-16 md:py-24">
      <div className="layout-container">
        <div className="mb-8 border border-[#272727] bg-[#151515] px-6 py-6 md:mb-12 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="font-['Chakra_Petch'] text-[0.8rem] uppercase tracking-[0.14em] text-white">
                acompanamiento institucional
              </p>
              <p className="mt-3 text-sm leading-[1.8] text-[#9a9a9a]">
                Talento IT se apoya en organizaciones que trabajan en formacion,
                empleabilidad e impacto social para ampliar oportunidades y
                articular el encuentro con el ecosistema real.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {institutionalPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex min-h-[92px] items-center justify-center border border-[#2a2a2a] bg-[#111111] px-6 py-5 transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#161616]"
                >
                  <img
                    src={partnerLogos[partner.id]}
                    alt={partner.name}
                    className={`h-10 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 ${
                      partner.id === "fundacion-compromiso" ? "max-w-[210px]" : "max-w-[180px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 border-t border-[#232323] pt-4 text-[0.82rem] leading-[1.7] text-[#7f7f7f]">
            {institutionalSupportNote}
          </p>
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.78rem] uppercase tracking-[0.16em] text-white after:h-px after:w-10 after:bg-white/40 after:content-['']">
              respaldo institucional
            </p>

            <h2 className="mb-5 font-['Chakra_Petch'] text-[clamp(2.05rem,4vw,3.2rem)] font-bold leading-[1] tracking-[0.01em] text-white">
              Una propuesta con
              <br />
              respaldo y proyeccion real
            </h2>

            <p className="max-w-[700px] text-[1.02rem] leading-[1.8] text-[#aaaaaa]">
              La feria se sostiene en una red de programas, alianzas y espacios
              de aprendizaje que le dan contexto, continuidad y una base
              institucional solida mas alla de una unica edicion.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {institutionalStats.map((item) => (
              <div
                key={item.label}
                className="border border-[#272727] bg-[#171717] px-5 py-4 transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#1b1b1b]"
              >
                <p className="font-['Chakra_Petch'] text-[2.1rem] font-bold tracking-[0.01em] text-[#C8D400]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-[1.7] text-[#909090]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-0.5 md:grid-cols-3">
          {institutionalPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="group relative border border-[#272727] bg-[#1c1c1c] px-8 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D400]/35 hover:bg-[#202020] hover:shadow-[0_18px_40px_rgba(200,212,0,0.07)]"
              >
                <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#2d2d2d] bg-[#151515] transition-colors duration-300 group-hover:border-[#C8D400]/30">
                  <Icon
                    size={22}
                    className="text-[#888888] transition-colors duration-300 group-hover:text-[#C8D400]"
                  />
                </div>

                <h3 className="font-['Chakra_Petch'] text-[1.12rem] font-semibold tracking-[0.01em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[0.93rem] leading-[1.8] text-[#909090]">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Institutional;
