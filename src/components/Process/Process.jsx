import { processHighlights, processSteps } from "../../data/processData";

const Process = () => {
  return (
    <section
      id="como-funciona"
      className="bg-[#111111] px-6 py-16 md:px-14 md:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.7rem] uppercase tracking-[0.22em] text-[#C8D400] after:h-px after:w-10 after:bg-[#C8D400]/50 after:content-['']">
              como funciona
            </p>

            <h2 className="mb-5 font-['Chakra_Petch'] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05] text-white">
              Un recorrido simple
              <br />
              para sumar tu empresa
            </h2>

            <p className="max-w-155 text-[1.02rem] leading-[1.8] text-[#aaaaaa]">
              La landing ya explica por que conviene participar. Esta seccion
              completa el cuadro: que pasa desde que nos escribis hasta que tu
              equipo empieza a conversar con talento.
            </p>

            <div className="mt-10 grid gap-4">
              {processHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="border border-[#272727] bg-[#171717] px-5 py-5 transition-colors duration-300 hover:border-[#C8D400]/30"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#2d2d2d] bg-[#111111]">
                        <Icon size={20} className="text-[#C8D400]" />
                      </div>

                      <div>
                        <h3 className="font-['Chakra_Petch'] text-[1rem] font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-[1.75] text-[#909090]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.step}
                  className="group relative overflow-hidden border border-[#272727] bg-[#1c1c1c] px-6 py-6 transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#202020] md:px-8 md:py-8"
                >
                  <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />

                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="flex items-center gap-4 md:w-42.5 md:flex-col md:items-start md:gap-3">
                      <span className="font-['Chakra_Petch'] text-3xl font-bold leading-none text-[#C8D400]">
                        {step.step}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center border border-[#2d2d2d] bg-[#151515]">
                        <Icon size={20} className="text-[#888888] group-hover:text-[#C8D400]" />
                      </div>
                    </div>

                    <div className="max-w-130">
                      <h3 className="font-['Chakra_Petch'] text-[1.1rem] font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-[1.8] text-[#909090]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
