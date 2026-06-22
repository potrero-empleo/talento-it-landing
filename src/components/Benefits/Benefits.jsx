import {
    LuUsers,
    LuBadgeCheck,
    LuGlobe,
    LuHandshake,
    LuBriefcase,
    LuSparkles,
} from "react-icons/lu";

const benefits = [
    {
        icon: LuUsers,
        title: "Acceso a talento IT federal",
        text: "Conectá con perfiles formados, motivados y disponibles en distintas provincias del país.",
    },
    {
        icon: LuBadgeCheck,
        title: "Visibilidad de marca empleadora",
        text: "Presentá tu empresa frente a una comunidad tecnológica activa y en búsqueda de oportunidades.",
    },
    {
        icon: LuHandshake,
        title: "Cero fricción para tu equipo",
        text: "La participación es simple: cargamos la información y tu empresa queda visible en la feria.",
    },
    {
        icon: LuGlobe,
        title: "100% virtual y sin costo",
        text: "Participá sin logística presencial, traslados ni inversión inicial.",
    },
    {
        icon: LuSparkles,
        title: "Impacto social real",
        text: "Sumarte también significa abrir oportunidades laborales para nuevos talentos del sector IT.",
    },
    {
        icon: LuBriefcase,
        title: "Diversidad de perfiles",
        text: "Encontrá candidatos con distintas trayectorias: egresados, perfiles junior, reconversión y experiencia previa.",
    },
];

const Benefits = () => {
    return (
        <section className="bg-[#0d0d0d] px-6 py-16 md:px-14 md:py-24">
            <div className="mb-12">
                <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.7rem] uppercase tracking-[0.22em] text-[#C8D400] after:h-px after:w-10 after:bg-[#C8D400]/50 after:content-['']">
                    Por qué participar
                </p>

                <h2 className="mb-5 font-['Chakra_Petch'] text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold leading-[1.08] text-white">
                    Razones que pesan
                    <br />
                    a la hora de decidir
                </h2>

                <p className="max-w-140 text-[1.05rem] leading-[1.8] text-[#aaaaaa]">
                    TalentoIT no es un portal de empleo más. Es un espacio donde las
                    empresas que apuestan por el talento emergente encuentran candidatos
                    que el mercado todavía no está mirando.
                </p>
            </div>

            <div className="grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                        <article
                            key={benefit.title}
                            className="group relative border border-[#272727] bg-[#1c1c1c] px-8 py-10 transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#202020]"
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

                            <h3 className="mb-3 font-['Chakra_Petch'] text-[1.05rem] font-semibold text-white">
                                {benefit.title}
                            </h3>

                            <p className="text-[0.91rem] leading-[1.75] text-[#909090]">
                                {benefit.text}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Benefits;