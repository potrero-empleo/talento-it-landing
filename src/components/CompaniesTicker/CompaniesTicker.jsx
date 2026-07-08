import { useEffect, useRef, useState } from "react";
import { brandLogos } from "../../data/companiesData";

function EmpresasLogos() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-22 pb-8 md:py-24">
      <div className="layout-container">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-['Chakra_Petch'] text-2xl font-semibold tracking-tight text-[#6d6d6d] md:text-4xl lg:text-[2.65rem]">
            <span className="company-count-highlight font-bold">+25</span>{" "}
            <span className="font-bold text-[#7c7c7c]">empresas</span>
          </h2>
          <p className="mx-auto max-w-4xl text-[1rem] leading-[1.8] text-[#d7d7d7] lg:text-lg">
            Los principales lideres de tecnologia confian en Talento IT para
            escalar sus capacidades tech.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:grid lg:grid-cols-5 lg:gap-8">
          {brandLogos.map((logo, index) => (
            <div
              key={logo.id}
              className={`company-logo-entry flex items-center justify-center h-20 w-32 ${
                isActive ? "company-logo-entry--active" : ""
              }`}
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                loading="lazy"
                className="h-12 w-auto max-w-full object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmpresasLogos;