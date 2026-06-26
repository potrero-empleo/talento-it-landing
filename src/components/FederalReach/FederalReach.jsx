import CoverageMap from "./CoverageMap";
import { federalProfiles } from "../../data/institutionalData";

const FederalReach = () => {
  return (
    <section className="bg-[#111111] px-6 py-16 md:px-14 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.7rem] uppercase tracking-[0.22em] text-[#C8D400] after:h-px after:w-10 after:bg-[#C8D400]/50 after:content-['']">
            Alcance federal
          </p>

          <h2 className="mb-6 font-['Chakra_Petch'] text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.05] text-white">
            Una oportunidad para todos
            <br />
            los perfiles IT del pais
          </h2>

          <p className="mb-10 max-w-[620px] text-[1.05rem] leading-[1.8] text-[#aaaaaa]">
            Talento IT no tiene limite geografico ni de experiencia. Llegas a
            candidatos que recien comienzan, a profesionales con recorrido y a
            personas que eligieron reconvertirse. Toda esa diversidad, en un
            solo lugar.
          </p>

          <div className="space-y-[2px]">
            {federalProfiles.map((profile) => {
              const Icon = profile.icon;

              return (
                <div
                  key={profile.title}
                  className="group border border-[#272727] bg-[#1c1c1c] px-6 py-6 transition-all duration-300 hover:border-[#C8D400]/30"
                >
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Icon size={22} className="text-[#C8D400]" />
                    </div>

                    <div>
                      <h3 className="mb-2 font-['Chakra_Petch'] text-[1.05rem] font-semibold text-white">
                        {profile.title}
                      </h3>

                      <p className="leading-[1.7] text-[#909090]">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-full overflow-hidden border border-[#272727] bg-[#0a0a0a]">
          <CoverageMap />
        </div>
      </div>
    </section>
  );
};

export default FederalReach;
