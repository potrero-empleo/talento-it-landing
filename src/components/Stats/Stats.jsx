import { stats } from "../../data/statsData";

const Stats = () => {
  return (
    <section className="grid grid-cols-2 gap-px border-y border-[#272727] bg-[#272727] md:grid-cols-3 xl:grid-cols-5">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`bg-[#111111] px-5 py-7 md:px-8 md:py-8 xl:px-10 xl:py-9 ${
            index === stats.length - 1 ? "col-span-2 md:col-span-3 xl:col-span-1" : ""
          }`}
        >
          <p className="font-['Chakra_Petch'] text-[1.95rem] font-bold leading-none tracking-[0.01em] text-[#C8D400] md:text-[2.35rem] xl:text-[2.7rem]">
            {stat.value}
          </p>

          <p className="mt-2 text-[0.78rem] leading-normal tracking-[0.04em] text-[#888888] md:text-[0.8rem] xl:text-[0.82rem]">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
