import React from "react";
import "../styles/speakers.css";

const empleabilidad = [
	{
		name: "Patricia Jebsen",
		role: "Clínica de Empleabilidad",
		org: "Empresa A",
		image: "/Perfil1.jpg",
	},
	{
		name: "Sofía Jobs",
		role: "Workshop Empleabilidad",
		org: "Empresa B",
		image: "/Perfil2.jpg",
	},
	{
		name: "Brigitte Bergery",
		role: "Workshop Empleabilidad",
		org: "Rayo Empleabilizador",
		image: "/Perfil3.jpg",
	},
	{
		name: "Romina Bruscagin",
		role: "Experta en Marketing Digital",
		org: "Startup D",
		image: "/Perfil4.jpg",
	},
	{
		name: "Laura Marcela Pérez Bosio",
		role: "El poder de la red: construyendo en comunidad y multiplicando el impacto con IA",
		org: "",
		image: "/Perfil6.jpg",
	},

];

const ecosistema = [
	{
		name: "Victor Maldonado",
		role: "Ecosistema IT",
		org: "Banco Galicia",
		image: "/Perfilx.jpg",
	},
	{
		name: "Axel Labruna",
		role: "WORKSHOP DESAFÍO TÉCNICO",
		org: "DevOps Day",
		image: "/Perfil5.jpg",
	},
	{
		name: "Gonzalo Ibañes",
		role: "Developer Advocate",
		org: "AWS",
		image: "/Perfilx.jpg",
	},
	
];

function Avatar({ name, src, altText }) {
  if (src) {
    return (
      <img
        className="spk-avatar"
        src={src}
        alt={altText || name}
        loading="lazy"
      />
    );
  }
  const generated = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=25D366&color=ffffff&size=128`;
  return (
    <img
      className="spk-avatar"
      src={generated}
      alt={altText || name}
      loading="lazy"
    />
  );
}

function SpeakerCard({ person }) {
  return (
    <article
      className="group relative w-full border border-[#272727] bg-[#1c1c1c] px-8 py-10 rounded-xl transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#202020]"
      tabIndex="0"
      aria-label={`${person.name} - ${person.role}`}>
      {/* top accent */}
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />

      {/* avatar */}
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#2d2d2d] bg-[#151515] transition-colors duration-300 group-hover:border-[#C8D400]/30 overflow-hidden">
        <Avatar name={person.name} src={person.image} altText={`${person.name} — ${person.role} en ${person.org}`} />
      </div>

      <div className="spk-info">
        <h4 className="spk-name">{person.name}</h4>
        <p className="spk-role">{person.role}</p>
        {person.org && <p className="spk-org">{person.org}</p>}
      </div>
    </article>
  );
}

export default function Speakers() {
  return (
    <section className="speakers-wrap" id="speakers">
      <div className="speakers-section">
        <h2>SPEAKERS CONFIRMADOS</h2>
        <p className="speakers-desc">Charlas sobre empleabilidad, búsqueda de talento y upskilling.</p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
					{empleabilidad.map((p) => (
						<SpeakerCard key={p.name} person={p} />
					))}
				</div>
       </div>

       <div className="speakers-section mt-12">
                 <h3 className="text-xl font-semibold text-white text-center mb-3">
                     Speakers — Ecosistema IT / Digital
                 </h3>
				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
					{ecosistema.map((p) => (
						<SpeakerCard key={p.name} person={p} />
					))}
				</div>
             </div>
     </section>
  );
}