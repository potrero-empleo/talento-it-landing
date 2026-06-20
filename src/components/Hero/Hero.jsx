import { useEffect, useState } from "react";

const confirmedCompanies = [
    "Accenture",
    "Globant",
    "Mercado Libre",
    "IBM",
    "Telecom",
];

const Hero = () => {
    const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCompanyIndex((prevIndex) =>
                prevIndex === confirmedCompanies.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentCompany = confirmedCompanies[currentCompanyIndex];

    return (
        <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#111111] px-6 pb-20 p-25 md:pt-40 md:px-14">
            <div className="absolute inset-0 opacity-50">
                <div className="h-full w-full bg-[linear-gradient(#272727_1px,transparent_1px),linear-gradient(90deg,#272727_1px,transparent_1px)] bg-[size:56px_56px]" />
            </div>

            <div className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(200,212,0,0.15)_0%,transparent_65%)]" />

            <div className="relative z-10">
                <div className="mb-10 inline-flex w-fit items-center gap-[10px] border border-[#272727] bg-[#1c1c1c] px-4 py-2">
                    <div className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8D400] animate-pulse" />

                    <span className="font-['Chakra_Petch'] text-[0.72rem] uppercase tracking-[0.12em] text-[#aaaaaa]">
                        <strong className="text-white">{currentCompany}</strong>{" "}
                        ya confirmó su participación — sumá tu empresa
                    </span>
                </div>

                <h1 className="mb-9 font-['Chakra_Petch'] text-[clamp(3rem,7vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
                    {/* Mobile */}
                    <span className="block md:hidden">
                        Encontrá el <span className="text-[#C8D400]">talento IT</span>
                        <br />
                        que buscás.
                    </span>

                    {/* Desktop */}
                    <span className="hidden md:block">
                        <span className="block">Encontrá el <span className="text-[#C8D400]">talento IT</span></span>
                        <span className="block">que tu empresa</span>
                        <span className="block ">está buscando.</span>
                    </span>
                </h1>


                <div className="mt-4 grid items-end gap-10 md:gap-12 md:grid-cols-2">
                    <p className="max-w-[480px] text-[1.1rem] leading-[1.75] text-[#aaaaaa]">
                        Participá de TalentoIT, la feria virtual de empleo tech que conecta empresas con candidatos de todo el país.
                    </p>

                    <div className="flex flex-col items-stretch gap-4 md:items-end">
                        <a
                            href="#contacto"
                            className="inline-block w-full bg-[#C8D400] px-10 py-[18px] text-center font-['Chakra_Petch'] text-[0.88rem] font-bold uppercase tracking-[0.1em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#d9e600]"
                        >
                            Postular mi empresa
                        </a>

                        <a
                            href="#como-funciona"
                            className="inline-block w-full border border-[#272727] px-8 py-[14px] text-center font-['Chakra_Petch'] text-[0.82rem] uppercase tracking-[0.08em] text-[#aaaaaa] transition hover:border-[#C8D400]/30 hover:text-white"
                        >
                            Conocer la propuesta
                        </a>

                        <p className="w-full text-center text-[0.72rem] tracking-[0.04em] text-[#888888]">
                            Participación sin costo · Gestionado por Potrero Digital
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;