const companies = [
  "ACCENTURE",
  "MERCADO LIBRE",
  "BANCO GALICIA",
  "AWS",
  "GOOGLE",
  "SANTANDER",
  "IBM",
  "ORACLE",
  "BBVA",
  "TELECOM",
  "NARANJA X",
  "DESPEGAR",
  "UALÁ",
  "RAPPI",
];

const CompaniesTicker = () => {
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="overflow-hidden border-y border-[#272727] bg-[#111111]">
      <div className="ticker-track flex">
        {duplicatedCompanies.map((company, index) => (
          <div key={`${company}-${index}`} className="flex items-center">
            <span className="px-6 py-2 font-['Chakra_Petch'] text-[0.72rem] uppercase tracking-[0.22em] text-[#555555] whitespace-nowrap">
              {company}
            </span>

            <div className="h-5 w-px bg-[#272727]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesTicker;