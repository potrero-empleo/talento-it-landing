/*const companies = [
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

            <div className="h-10 w-px bg-[#272727]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesTicker;*/
import React from 'react';

// 1. Array de datos optimizado para escalabilidad y mantenimiento limpio
const BRAND_LOGOS = [
  { id: 'ibm', name: 'IBM', url: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21~bgwhite.svg' },
  { id: 'globant', name: 'Globant', url: 'https://statics.globant.com/com/public/2025-11/Globant%20%281%29.svg' },
  { id: 'aws', name: 'AWS', url: '/logos/aws-svgrepo-com.svg' },
  { id: 'rappi', name: 'Rappi', url:"/logos/Rappi_logo.svg" },
  { id: 'santander', name: 'Santander', url: 'https://www.vectorlogo.zone/logos/santanderbank/santanderbank-ar21~bgwhite.svg' },
  { id: 'banco galicia', name: 'Banco Galicia', url: '/logos/banco_galicia.svg' },
  { id: 'mercado libre', name: 'Mercado Libre', url: '/logos/mercadolibre.svg' },
  { id: 'pedidos ya', name: 'Pedidos Ya', url: 'https://pedidosya.dhmedia.io/image/pedidosya/fenix/images/logos/Logo.svg' },
  { id: 'bbva', name: 'BBVA', url: 'https://www.vectorlogo.zone/logos/bbva/bbva-ar21~bgwhite.svg' },
  { id: 'google', name: 'Google', url: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
  { id: 'despegar', name: 'Despegar', url: '/logos/despegar.com_logo.svg' },
  { id: 'uala', name: 'Ualá', url: '/logos/uala-logo.png' },
  { id: 'oracle', name: 'Oracle', url: 'https://www.vectorlogo.zone/logos/oracle/oracle-ar21~bgwhite.svg' },
  { id: 'telecom', name: 'Telecom', url: '/logos/telecom.svg' },
  { id: 'naranja x', name: 'Naranja X', url: '/logos/naranjaX-logo.svg' }
];

function EmpresasLogos() {
  return (
    <section className="pt-22 pb-8 md:py-24">
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
          {BRAND_LOGOS.map((logo) => (
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


