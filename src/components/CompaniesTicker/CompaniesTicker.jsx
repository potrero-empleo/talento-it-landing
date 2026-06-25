<<<<<<< HEAD
<<<<<<< HEAD
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

const BRAND_LOGOS = [
  { id: 'ibm', name: 'IBM', url: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21~bgwhite.svg' },
  { id: 'globant', name: 'Globant', url: 'https://statics.globant.com/com/public/2025-11/Globant%20%281%29.svg' },
  { id: 'aws', name: 'AWS', url: '../public/logos/aws-svgrepo-com.svg' },
  { id: 'rappi', name: 'Rappi', url:'../public/logos/Rappi_logo.svg'},
  { id: 'santander', name: 'Santander', url: 'https://www.vectorlogo.zone/logos/santanderbank/santanderbank-ar21~bgwhite.svg' },
  { id: 'banco galicia', name: 'Banco Galicia', url: '/logos/banco_galicia.svg' },
  { id: 'mercado libre', name: 'Mercado Libre', url: '..public/logos/mercadolibre.svg' },
  { id: 'pedidos ya', name: 'Pedidos Ya', url: 'https://pedidosya.dhmedia.io/image/pedidosya/fenix/images/logos/Logo.svg' },
  { id: 'bbva', name: 'BBVA', url: 'https://www.vectorlogo.zone/logos/bbva/bbva-ar21~bgwhite.svg' },
  { id: 'google', name: 'Google', url: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
  { id: 'despegar', name: 'Despegar', url: '../public/logos/despegar.com_logo.svg' },
  { id: 'uala', name: 'Ualá', url: '../public/logos/uala-logo.png' },
  { id: 'oracle', name: 'Oracle', url: 'https://www.vectorlogo.zone/logos/oracle/oracle-ar21~bgwhite.svg' },
  { id: 'telecom', name: 'Telecom', url: 'https://www.personal.com.ar/content/dam/teco-cms-ecosystem/componentes-cross/header/personal-brand-header.svg' },
  { id: 'naranja x', name: 'Naranja X', url: '../public/logos/NaranjaX-logo.svg' },
  { id: 'banco nacion', name: 'banco nacion', url: '../public/logos/BNA.svg' } 
];
=======
import { brandLogos } from "../../data/companiesData";
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c
=======
import { brandLogos } from "../../data/companiesData";
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c

function EmpresasLogos() {
  // Función para manejar errores de carga de imagen
  const handleImageError = (e) => {
    // Si la imagen falla (link roto o archivo inexistente), la ocultamos
    e.target.style.display = 'none';
    // Opcionalmente, podrías setear una imagen por defecto así:
    // e.target.src = '/logos/placeholder.svg';
  };

  return (
    <section id="companies" className="pt-22 pb-8 md:py-24 scroll-mt-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-4.2xl font-semibold text-neutral-700 mb-6 tracking-tight">
            <span className="font-bold">+25 </span> empresas
          </h2>
          <p className="lg:text-lg">
           Empresas líderes del sector tecnológico, financiero y de servicios digitales ya eligieron Talento IT. ¿Se suma la tuya?  
          </p>
        </div>

        {/* Grilla de Logos Mapeada Dinámicamente */}
        <div className="flex lg:grid lg:grid-cols-5 flex-wrap justify-center gap-4 lg:gap-8 items-center">
<<<<<<< HEAD
<<<<<<< HEAD
          {BRAND_LOGOS.map((logo) => {
            // Si la URL está vacía (''), renderizamos el nombre de la empresa estilizado
            if (!logo.url) {
              return (
                <div 
                  key={logo.id} 
                  className="flex items-center justify-center mx-auto h-10 md:h-12 w-auto text-neutral-400 font-bold text-lg opacity-80 hover:opacity-100 transition-all duration-300 select-none"
                >
                  {logo.name}
                </div>
              );
            }

            // Si hay URL, intentamos renderizar la imagen
            return (
              <img 
                key={logo.id}
                src={logo.url} 
                alt={`Logo de ${logo.name}`} 
                loading="lazy" 
                width="113" 
                height="45" 
                className="block mx-auto h-10 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={handleImageError}
              />
            );
          })}
=======
=======
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c
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
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c
        </div>

      </div>
    </section>
  );
}

export default EmpresasLogos;

