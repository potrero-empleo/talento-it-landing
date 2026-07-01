import { benefits } from "../../data/benefitsData";

const Benefits = () => {
    return (
        <section
          id="como-participar"
          className="bg-[#0d0d0d] py-16 md:py-24"
          style={{ scrollMarginTop: "96px" }}
        >
            <div className="layout-container">
            <div className="mb-12">
                <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.78rem] uppercase tracking-[0.16em] text-white after:h-px after:w-10 after:bg-white/40 after:content-['']">
                    por qué participar
                </p>

                <h2 className="mb-5 font-['Chakra_Petch'] text-[clamp(2.05rem,3.5vw,3rem)] font-bold leading-1 tracking-[0.01em] text-white"/>
                    Razones que marcan
                    <br />
                    la diferencia.

                <p className="max-w-140 text-[1.05rem] leading-[1.8] text-[#aaaaaa]">
                   Sumarte dará visibilidad a tu marca, será una oportunidad para exponer tu propuesta de valor y conectar de forma directa con una comunidad activa..
                </p>
            </div>

            <div className="grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                        <article
                            key={benefit.title}
                            className="group relative border border-[#272727] bg-[#1c1c1c] px-8 py-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D400]/35 hover:bg-[#202020] hover:shadow-[0_18px_40px_rgba(200,212,0,0.07)]"
                        >
                            {/* Línea superior */}
                            <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />

                            {/* Icono */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#2d2d2d] bg-[#151515] transition-colors duration-300 group-hover:border-[#C8D400]/30">
                                <Icon
                                    size={22}
                                    className="text-[#888888] transition-colors duration-300 group-hover:text-[#C8D400]"
                                />
                            </div>

                            <h3 className="mb-3 font-['Chakra_Petch'] text-[1.12rem] font-semibold tracking-[0.01em] text-white">
                                {benefit.title}
                            </h3>

                            <p className="text-[0.91rem] leading-[1.75] text-[#909090]">
                                {benefit.text}
                            </p>
                        </article>
                    );
                })}
            </div>
            </div>
        </section>
    );
};

export default Benefits;
