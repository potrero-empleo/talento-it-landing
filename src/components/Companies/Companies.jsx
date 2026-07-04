import {
  companyAudienceSignals,
  companyRoleTracks,
} from "../../data/companyProfilesData";

const Companies = () => {
  return (
    <section
      id="companies"
      className="bg-[#0d0d0d] py-16 md:py-24"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="layout-container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.78rem] uppercase tracking-[0.16em] text-white after:h-px after:w-10 after:bg-white/40 after:content-['']">
              para empresas que quieren participar
            </p>

            <h2 className="mb-5 font-['Chakra_Petch'] text-[clamp(2.05rem,4vw,3.2rem)] font-bold leading-[1] tracking-[0.01em] text-white">
              Lo que tu empresa
              <br />
              obtiene al sumarse
            </h2>

            <p className="max-w-180 text-[1.02rem] leading-[1.8] text-[#aaaaaa]">
              Participar en Talento IT no es solo aparecer en una grilla. Es
              mostrar tu empresa dentro de una feria pensada para conectar
              organizaciones con perfiles IT de distintas trayectorias, de forma
              simple, ordenada y sin costo.
            </p>
          </div>

          <div className="grid gap-3">
            {companyAudienceSignals.map((signal) => (
              <div
                key={signal.value}
                className="border border-[#272727] bg-[#171717] px-5 py-4 transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#1b1b1b]"
              >
                <p className="font-['Chakra_Petch'] text-[1rem] font-semibold uppercase tracking-wider text-[#C8D400]">
                  {signal.value}
                </p>
                <p className="mt-2 text-sm leading-[1.7] text-[#8f8f8f]">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-0.5 lg:grid-cols-2">
          {companyRoleTracks.map((track) => {
            const Icon = track.icon;

            return (
              <article
                key={track.title}
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
                  {track.title}
                </h3>
                <p className="mt-3 text-[0.93rem] leading-[1.8] text-[#909090]">
                  {track.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#2d2d2d] bg-[#151515] px-3 py-1 text-[0.72rem] uppercase tracking-[0.08em] text-[#b6b6b6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Companies;
