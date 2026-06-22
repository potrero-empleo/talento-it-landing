import React from 'react'

const stats = [
  {
    value: "30.000",
    label: "Personas en la comunidad Potrero Digital",
  },
  {
    value: "+500",
    label: "Talentos en búsqueda activa de empleo IT",
  },
  {
    value: "25+",
    label: "Empresas participantes confirmadas",
  },
  {
    value: "100%",
    label: "Virtual · Sin costo para la empresa",
  },
  {
    value: "Federal",
    label: "Talento de todo el país",
  },
];

const Stats = () => {
  return (
    <section className="grid grid-cols-2 border-y border-[#272727] bg-[#111111] md:grid-cols-5">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`
            border-[#272727] px-6 py-8 md:px-10 md:py-9
            ${index % 2 === 0 ? "border-r" : ""}
            ${index < 2 ? "border-b md:border-b-0" : ""}
            ${index !== stats.length - 1 ? "md:border-r" : ""}
          `}
        >
          <p className="font-['Chakra_Petch'] text-[2rem] font-bold leading-none text-[#C8D400] md:text-[2.6rem]">
            {stat.value}
          </p>

          <p className="mt-2 text-[0.8rem] tracking-[0.04em] text-[#888888] md:text-[0.82rem]">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
