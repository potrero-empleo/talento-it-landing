import { brandLogos } from "../../data/companiesData";

function EmpresasLogos() {
  return (
    <section id="companies" className="pt-22 pb-8 md:py-24 scroll-mt-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-4.2xl font-semibold text-neutral-700 mb-6 tracking-tight">
            <span className="font-bold"> </span><span className="font-bold">+25 </span> empresas
          </h2>
          <p className="lg:text-lg">
            Los principales líderes de tecnología confían en Talento IT para escalar sus capacidades tech
          </p>
        </div>

        {/* Grilla de Logos Mapeada Dinámicamente */}
        <div className="flex lg:grid lg:grid-cols-5 flex-wrap justify-center gap-4 lg:gap-8 items-center">
          {brandLogos.map((logo) => (
            <img 
              key={logo.id}
              src={logo.url} 
              alt={logo.name} 
              loading="lazy" 
              width="113" 
              height="45" 
              className="block mx-auto h-10 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default EmpresasLogos;


